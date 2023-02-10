//
//  ContentView.swift
//  Scrumringer
//
//  Created by Eduardo Graciano on 18/1/23.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            
            HStack {
                Text("San Jose")
                Spacer()
                Image("")
            }
            
            HStack {
                Text("Clear")
                Spacer()
                Text("20")
            }
        }
        .padding()
        .foregroundColor(Color.blue)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView().background(Color.cyan)
            .previewLayout(.fixed(width: 400, height: 60))
    }
}
