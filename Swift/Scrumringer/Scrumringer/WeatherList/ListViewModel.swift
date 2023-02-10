//
//  ListViewModel.swift
//  Scrumringer
//
//  Created by Eduardo Graciano on 19/1/23.
//

import Foundation
import SwiftUI

class ListViewModel: ObservableObject {

    @ObservedObject var repository = WeatherRepository() // this should be injected
    
    init() {
        repository.fetchLocationWeather()
    }
    
    @MainActor
    func fetchWeatherLocation() {
        repository.fetchLocationWeather()
    }
}
