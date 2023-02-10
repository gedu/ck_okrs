//
//  WeatherListView.swift
//  Scrumringer
//
//  Created by Eduardo Graciano on 18/1/23.
//

import Foundation
import SwiftUI

struct WheatherListView: View {
    @StateObject var weatherViewModel = WeatherRepository()
    
    var body: some View {
        VStack {
            
            if !weatherViewModel.dataLocationItem.isEmpty {
                List {
                    
                    ForEach(weatherViewModel.dataLocationItem, id: \.id) { weather in
                        NavigationLink (destination: WeatherDetailsView(weatherLocation: weather)) {
                            WeatherCardView(weather: weather)
                            
                        }
                    }
                }
                .navigationTitle("Weather")
            } else if weatherViewModel.isLoading {
                ProgressView().progressViewStyle(CircularProgressViewStyle())
            }
        }
    }
}

struct WheatherListView_Preview: PreviewProvider {
    static var previews: some View {
        NavigationView {
            WheatherListView()
                .previewDevice(PreviewDevice(rawValue: "iPhone 14"))
            
        }
    }
}
