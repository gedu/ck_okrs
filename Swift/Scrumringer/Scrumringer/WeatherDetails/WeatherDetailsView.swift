//
//  WeatherDetailsView.swift
//  Scrumringer
//
//  Created by Eduardo Graciano on 19/1/23.
//

import SwiftUI

struct WeatherDetailsView: View {
    let weatherLocation: LocationItem
    
    var body: some View {
        ScrollView {
            VStack {
                HeaderItemView(title: weatherLocation.weather[0].main, subTitle: weatherLocation.weather[0].description, value: "\(weatherLocation.main.temp)", iconUrl:"https://openweathermap.org/img/wn/\(weatherLocation.weather[0].icon).png")
                Section {
                    Divider()
                    ItemView(title: "Humidity", value: "\(weatherLocation.main.humidity)")
                    Divider()
                    ItemView(title: "Wind", value: "\(weatherLocation.wind.speed)")
                }
            }
        }
    }
}

struct HeaderItemView: View {
    var title: String
    var subTitle: String
    var value: String
    var iconUrl: String
    
    var body: some View {
        HStack {
            VStack(spacing: 8.0) {
                AsyncImage(url: URL(string: iconUrl))
            }
            Text(title)
            Text(subTitle)
            Spacer()
            Text(value)
        }
        .padding()
        
    }
}

struct ItemView: View {
    var title: String
    var value: String
    
    var body: some View {
        
        HStack {
            Text(title)
            Spacer()
            Text(value)
        }
        .padding()
        
        
    }
}

struct WeatherDetailsView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            WeatherDetailsView(weatherLocation: sampleLocation)}
    }
}

struct HeaderItemView_Previews: PreviewProvider {
    static var previews: some View {
        HeaderItemView(title: "Humidity", subTitle: "Clear", value: "20", iconUrl: "")
    }
    
}


struct ItemView_Previews: PreviewProvider {
    static var previews: some View {
        ItemView(title: "Humidity", value: "20")
    }
    
}
