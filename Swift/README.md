
# 101 Swift

Swift is a modern, fast, and safe programming language developed by Apple
SwiftUI is a declarative framework for building user interfaces, also developed by Apple. It allows developers to create user interfaces in a simple and intuitive way, using a combination of code and visual design tools. 
Together, Swift and SwiftUI make it easy to create high-performance, responsive, and visually appealing apps

 ## Example app
 If you work at Callstack you can follow the internal weather app as model to write.
 
 Note: Don't follow this current app as model of good practices.

 ## Learning Swift

 In this tutorial, we will be learning the basics of Swift programming language. 

### Struct

A struct is a data structure that allows you to store multiple values together in a single unit. It is similar to a class, but with some key differences. Structs are value types, which means that they are copied when they are assigned to a variable or passed as an argument to a function, whereas classes are reference types, which means that they are passed by reference.

```
struct Point {
    var x: Double
    var y: Double
}

let point = Point(x: 3.0, y: 4.0)
print("The point is at (\(point.x), \(point.y))")

```

### Extensions

An extension is a way to add new functionality to an existing class, struct, or enumeration without having to create a new subclass or struct. This can include new methods, properties, and initializers.
```
extension Point {
    func distanceToOrigin() -> Double {
        return sqrt(x*x + y*y)
    }
}

print("Distance to origin: \(point.distanceToOrigin())")
```

You can also use extensions to add new properties, initializers, and subscripts to existing types. This allows you to add new functionality to types that you don't have the source code for, such as classes from a framework.

Keep in mind that extensions cannot override existing functionality of the original type, but can add new functionality or extend the existing one.

### Protocols

A protocol defines a blueprint of methods, properties, and other requirements that a class, struct, or enumeration must implement. It allows for a level of abstraction and polymorphism in your code.

```
protocol Flyable {
    var airspeedVelocity: Double { get }
    func fly()
}
```

### Optionals

Optionals are a way to handle the absence of a value in Swift. An optional variable can either contain a value or be nil, and Swift's type system enforces the handling of nil values.

```
var age: Int?
age = nil

if let userAge = age {
    print("Your age is \(userAge).")
} else {
    print("Your age is not set.")
}
```
You can also use the nil-coalescing operator ?? to provide a default value when the optional variable is nil:

```
let userAge = age ?? 18
print("Your age is \(userAge).")
```
Another way to handle optionals is by using the guard statement that check if an optional variable is not nil, if it's not the case, the execution of the code will continue after the guard statement, if it's nil the code will exit the scope.

```
guard let userAge = age else {
    print("Your age is not set.")
    return
}
print("Your age is \(userAge).")
```

## Learning SwiftUI

Offers a new way to build user interfaces using a declarative syntax

### Views

The building blocks of a SwiftUI interface are views, which represent the visual elements of the user interface. These include basic elements like text and images, as well as more complex elements like lists and navigation views.

```
struct ContentView: View {
    var body: some View {
        Text("Hello, World!")
            .font(.largeTitle)
    }
}
```

### Layout

SwiftUI uses a layout system that automatically arranges views based on their properties and the available space. This allows you to create responsive interfaces that adapt to different screen sizes and orientations.
```
struct ContentView: View {
    var body: some View {
        VStack {
            Text("Hello")
                .font(.title)
                .foregroundColor(.green)
            Image("example")
                .resizable()
                .aspectRatio(contentMode: .fit)
                .frame(width: 200)
        }
    }
}
```

### State

SwiftUI uses a reactive programming model, which means that the interface updates automatically in response to changes in the underlying data. This is achieved through the use of state, which can be managed by SwiftUI's built-in @State and @Binding property wrappers, as well as custom ObservableObject and EnvironmentObject classes.

```
struct ContentView: View {
    @State private var count: Int = 0

    var body: some View {
        VStack {
            Text("Count: \(count)")
            Button(action: {
                self.count += 1
            }) {
                Text("Increment")
            }
        }
    }
}
```

Using `StateObject` and `ObservableObject`
```
class Counter: ObservableObject {
    @Published var count: Int = 0
}

struct ContentView: View {
    @StateObject var counter = Counter()

    var body: some View {
        VStack {
            Text("Count: \(counter.count)")
            Button(action: {
                self.counter.count += 1
            }) {
                Text("Increment")
            }
        }
    }
}
```

### Preview

SwiftUI provides a built-in preview feature that allows you to see the changes you made to your views in real-time, without having to run the app on a device. This speeds up the development process by providing instant feedback on the changes you made.

```
struct ContentView: View {
    var body: some View {
        Text("Hello, World!")
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
            .previewDevice(PreviewDevice(rawValue: "iPhone SE"))
    }
}
```

If you need more information, you can always check the official documentation.
# 101 Swift

Swift is a modern, fast, and safe programming language developed by Apple
SwiftUI is a declarative framework for building user interfaces, also developed by Apple. It allows developers to create user interfaces in a simple and intuitive way, using a combination of code and visual design tools. 
Together, Swift and SwiftUI make it easy to create high-performance, responsive, and visually appealing apps



 ## Learning Swift

 In this tutorial, we will be learning the basics of Swift programming language. 

### Struct

A struct is a data structure that allows you to store multiple values together in a single unit. It is similar to a class, but with some key differences. Structs are value types, which means that they are copied when they are assigned to a variable or passed as an argument to a function, whereas classes are reference types, which means that they are passed by reference.

```
struct Point {
    var x: Double
    var y: Double
}

let point = Point(x: 3.0, y: 4.0)
print("The point is at (\(point.x), \(point.y))")

```

### Extensions

An extension is a way to add new functionality to an existing class, struct, or enumeration without having to create a new subclass or struct. This can include new methods, properties, and initializers.
```
extension Point {
    func distanceToOrigin() -> Double {
        return sqrt(x*x + y*y)
    }
}

print("Distance to origin: \(point.distanceToOrigin())")
```

You can also use extensions to add new properties, initializers, and subscripts to existing types. This allows you to add new functionality to types that you don't have the source code for, such as classes from a framework.

Keep in mind that extensions cannot override existing functionality of the original type, but can add new functionality or extend the existing one.

### Protocols

A protocol defines a blueprint of methods, properties, and other requirements that a class, struct, or enumeration must implement. It allows for a level of abstraction and polymorphism in your code.

```
protocol Flyable {
    var airspeedVelocity: Double { get }
    func fly()
}
```

### Optionals

Optionals are a way to handle the absence of a value in Swift. An optional variable can either contain a value or be nil, and Swift's type system enforces the handling of nil values.

```
var age: Int?
age = nil

if let userAge = age {
    print("Your age is \(userAge).")
} else {
    print("Your age is not set.")
}
```
You can also use the nil-coalescing operator ?? to provide a default value when the optional variable is nil:

```
let userAge = age ?? 18
print("Your age is \(userAge).")
```
Another way to handle optionals is by using the guard statement that check if an optional variable is not nil, if it's not the case, the execution of the code will continue after the guard statement, if it's nil the code will exit the scope.

```
guard let userAge = age else {
    print("Your age is not set.")
    return
}
print("Your age is \(userAge).")
```

## Learning SwiftUI

Offers a new way to build user interfaces using a declarative syntax

### Views

The building blocks of a SwiftUI interface are views, which represent the visual elements of the user interface. These include basic elements like text and images, as well as more complex elements like lists and navigation views.

```
struct ContentView: View {
    var body: some View {
        Text("Hello, World!")
            .font(.largeTitle)
    }
}
```

### Layout

SwiftUI uses a layout system that automatically arranges views based on their properties and the available space. This allows you to create responsive interfaces that adapt to different screen sizes and orientations.
```
struct ContentView: View {
    var body: some View {
        VStack {
            Text("Hello")
                .font(.title)
                .foregroundColor(.green)
            Image("example")
                .resizable()
                .aspectRatio(contentMode: .fit)
                .frame(width: 200)
        }
    }
}
```

### State

SwiftUI uses a reactive programming model, which means that the interface updates automatically in response to changes in the underlying data. This is achieved through the use of state, which can be managed by SwiftUI's built-in @State and @Binding property wrappers, as well as custom ObservableObject and EnvironmentObject classes.

```
struct ContentView: View {
    @State private var count: Int = 0

    var body: some View {
        VStack {
            Text("Count: \(count)")
            Button(action: {
                self.count += 1
            }) {
                Text("Increment")
            }
        }
    }
}
```

Using `StateObject` and `ObservableObject`
```
class Counter: ObservableObject {
    @Published var count: Int = 0
}

struct ContentView: View {
    @StateObject var counter = Counter()

    var body: some View {
        VStack {
            Text("Count: \(counter.count)")
            Button(action: {
                self.counter.count += 1
            }) {
                Text("Increment")
            }
        }
    }
}
```

### Preview

SwiftUI provides a built-in preview feature that allows you to see the changes you made to your views in real-time, without having to run the app on a device. This speeds up the development process by providing instant feedback on the changes you made.

```
struct ContentView: View {
    var body: some View {
        Text("Hello, World!")
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
            .previewDevice(PreviewDevice(rawValue: "iPhone SE"))
    }
}
```

If you need more information, you can always check the official [documentation](https://developer.apple.com/tutorials/app-dev-training).
