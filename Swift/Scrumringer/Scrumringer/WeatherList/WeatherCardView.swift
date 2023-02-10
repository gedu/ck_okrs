//
//  WheatherCardView.swift
//  Scrumringer
//
//  Created by Eduardo Graciano on 18/1/23.
//

import SwiftUI

struct WeatherCardView: View {
    let weather: LocationItem
    
    var body: some View {
        VStack {
            
            HStack {
                Text(weather.name)
                Spacer()
                AsyncImage(url: URL(string: "https://openweathermap.org/img/wn/\(weather.weather[0].icon).png"))
            }
            
            HStack {
                Text(weather.weather[0].description)
                Spacer()
                Text("20")
            }
        }
        .padding()
        .foregroundColor(Color.blue)
    }
}

struct WeatherCardView_Previews: PreviewProvider {
    static var previews: some View {
        WeatherCardView(weather: sampleLocation).background(Color.cyan)
    }
}
