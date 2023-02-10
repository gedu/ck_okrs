//
//  WeatherRepository.swift
//  Scrumringer
//
//  Created by Eduardo Graciano on 19/1/23.
//

import Foundation
import SwiftUI
import Combine

enum LoadableState<T> {
    case idle
    case loading
    case success(T)
    case error(Error)
}


class WeatherRepository: ObservableObject {
    @Published var error: Error?
    @Published var isLoading: Bool = true
    @Published var dataLocationItem: [LocationItem] = []
    
    init() {
        fetchLocationWeather()
    }
    
    func fetchLocationWeather() {
//        self.fireLoading(state:true)
        let url = URL(string: "\(ServiceConfig.baseUrl)/\(ServiceConfig.version)/group?id=\(cityIdsQuery)&cnt=1&appid=\(ServiceConfig.apiKey)")!
        var request = URLRequest(url: url)
        request.httpMethod = "GET"
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")
        request.addValue("application/json", forHTTPHeaderField: "Accept")
        
        URLSession.shared.dataTask(with: request) { (data, response, error) in
            
            if let error = error {
                print("REQUEST ERROR: \(error)")
                self.fireError(error: error)
                return
            }
            
            if let data = data {
                let decoder = JSONDecoder()
             
                do {
                    let locationItem: LocationResponse = try decoder.decode(LocationResponse.self, from: data)
                    //self.fireSuccess(data: locationItem.list)
                    DispatchQueue.main.asyncAfter(deadline: .now() + 3.0) {
                        print("PUSHING DATA: \(locationItem)")
                        self.dataLocationItem = locationItem.list
                    }
                } catch {
                    print("DECODE ERROR \(error)")
                }
            }
            self.fireLoading(state:false)
        }.resume()
    }
    
    private func fireLoading(state: Bool) {
        DispatchQueue.main.async {
            self.isLoading = state
        }
    }
    
    private func fireError(error: Error) {
        DispatchQueue.main.async {
            self.error = error
        }
    }
}
