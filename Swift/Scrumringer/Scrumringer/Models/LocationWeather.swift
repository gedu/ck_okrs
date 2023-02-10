//
//  LocationWeather.swift
//  Scrumringer
//
//  Created by Eduardo Graciano on 18/1/23.
//

import Foundation

struct TemperatureInfo: Codable {
    var humidity: Float;
    var pressure: Float;
    var temp: Float;
};

struct WeatherItem: Codable {
    var description: String;
    var icon: String;
    var id: Int;
    var main: String;
};

struct CloudsItem: Codable {
    var all: Float;
}

struct WindItem: Codable {
    var speed: Float;
}

struct LocationItem: Codable {
  var clouds: CloudsItem;
  var id: Int;
  var main: TemperatureInfo;
  var name: String;
  var weather: [WeatherItem];
  var wind: WindItem;
};

struct LocationResponse: Codable {
    var list: [LocationItem]
}

let sampleLocation = LocationItem(clouds: CloudsItem(all: 10), id: 10, main: TemperatureInfo(humidity: 1.0, pressure: 2.0, temp: 3.0), name: "San Jose", weather: [WeatherItem(description: "Mock", icon: "", id: 123, main: "")], wind: WindItem(speed: 2.0))
