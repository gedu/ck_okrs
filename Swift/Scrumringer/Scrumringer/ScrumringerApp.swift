//
//  ScrumringerApp.swift
//  Scrumringer
//
//  Created by Eduardo Graciano on 18/1/23.
//

import SwiftUI

@main
struct ScrumringerApp: App {
    var body: some Scene {
        WindowGroup {
            NavigationView {
                WheatherListView()
            }
        }
    }
}
