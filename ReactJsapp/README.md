
# 101 React

React is a JavaScript library for building user interfaces. It allows developers to build reusable UI components and manage the state of their application in a efficient way.


 ## Learning React

 In this tutorial, we will be learning the basics of React programming language. 

### Components

React is built around the concept of components, which are self-contained pieces of code that represent a part of the UI. They can be reused throughout the application and can accept props (short for properties) to customize their behavior.

Class Component:
```
import React, { Component } from 'react';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello, world!'
        };
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.setState({ message: 'Hello, React!' })}>
                    Update Message
                </button>
            </div>
        );
    }
}

export default MyComponent;

```
Function Component using Hooks
```
import MyComponent from './MyComponent';

function App() {
    const [message, setMessage] = useState({ message: 'Hello, world!'});
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => setMessage({ message: 'Hello, React!' })}>
                Update Message
            </button>
        </div>
    );
}

export default App;
```

### Virtual DOM

React uses a virtual DOM (Document Object Model) to improve the performance of updates to the UI. When a component's state or props change, React updates the virtual DOM, and then figures out the minimal set of changes needed to update the actual DOM.


### JSX

React uses a syntax extension called JSX, which allows you to write HTML-like elements in your JavaScript code. This makes it easier to understand how a component's UI is structured.

```
import React from 'react';

const MyComponent = ({ name, message }) => {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>{message}</p>
        </div>
    );
};

export default MyComponent;
```

### State and Props

State is the data that a component manages internally, and props are the data that is passed to the component from a parent component. When a component's state or props change, it will re-render itself, and update the UI.


## Hooks

React Hooks are functions that allow you to use state and other React features in functional components, instead of having to use class-based components.

```
import { useState } from 'react';

function useCounter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return { count, increment, decrement };
}
```


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