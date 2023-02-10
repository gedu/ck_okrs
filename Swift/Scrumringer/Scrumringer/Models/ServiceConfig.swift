//
//  ServiceConfig.swift
//  Scrumringer
//
//  Created by Eduardo Graciano on 20/1/23.
//

import Foundation

let cities: [Int] = [
    2988507, // Paris,
    3117735, // Madrid,
    5368361, // Los Angeles,
    4930956, // Boston
    5128581, // New York City,
    1880252, // Singapore
    3094802, // Cracow,
    3081368, // Wroclaw,
]

let cityIdsQuery = cities.map {"\($0)"}.joined(separator: ",")

struct ServiceConfig {
    static let baseUrl = "https://api.openweathermap.org/data/"
    static let version = "2.5"
    static let apiKey = "9a29521300953f9d7675b1d216c719e9"
};
