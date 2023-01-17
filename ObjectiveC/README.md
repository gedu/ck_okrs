
# 101 Objective-C

These series of exercises you can do, so you can learn the basics of Objective-C. You can make sure it is working by running the tests and checking the Assert. The code includes examples of various features of the language, such as class and category implementation, blocks, macros, and more.


## Incomplete template

Create a new Unit Test, you can follow: https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/testing_with_xcode/chapters/04-writing_tests.html
and paste this this code.
```

#import <XCTest/XCTest.h>
#import <Foundation/Foundation.h>

#define RANDOM_NUM 10
typedef void (^VoidCallback)(void);

#ifdef MAXMACRO
  #define MAXIMUM(x,y) ((x) > (y) ? (x) : (y))
#endif

#if !defined (MAXIMUM)
  #define MAXIMUM(x,y) ((x) < (y) ? (x) : (y))
#endif

// Create User struct with userId and name as NSString and age as int

double (^multiplyNums)(double, double) = ^(double num1, double num2) {
    // complete
  return 1;
};

@interface NSString (CustomString)
+ (NSString *)postfixHi: (NSString *)word;

@end



@interface HelloLog : NSObject
// - instance
// + static
- (void)consoleLog;

- (NSString *)createSteps: (int)steps;
- (NSString *)createSteps: (int)steps withEndMsg: (NSString *)msg;

- (double)handleMultiplying:(double)num1 withSecond: (double)num2 onEnd: (VoidCallback)callback;
- (NSString *)getCheerMessage:(int)step error:(NSError **)errorPointer;
@end

@implementation NSString (CustomString)

+ (NSString *)postfixHi: (NSString *)word {
  // complete
  return @"";
}


@end

@implementation HelloLog

- (void)consoleLog {
  // complete
}

- (int)getRandom {
    // complete
  return 0;
}

- (NSString *)createSteps:(int)steps {
    // complete
  return @"";
}

- (NSString *)createSteps:(int)steps withEndMsg:(NSString *)msg {
  NSMutableString *text = [NSMutableString stringWithString: @""];
  
  // complete
  return text;
}

- (double)handleMultiplying:(double)num1 withSecond:(double)num2 onEnd:(VoidCallback)callback {
  double res = multiplyNums(num1, num2);
  callback();
  return res;
}

/**
 Objective-C programming language does not allow to return an entire array as an argument to a function. However, you can return a pointer to an array by specifying the array's name without an index
 */
+ (int *)createSumArray:(int)size initialNum:(int)num {
  // https://stackoverflow.com/questions/65848290/c-avoiding-warning-address-of-stack-memory-associated-with-local-variable-ret
  // Cannot create this array to return it, because the the var memory is used with in this scope
  // to solve it could be static int sum[10]; I'm responsiable to delete it later delete sum
  //int sums[size];
  int* sums = calloc(size, sizeof(int));

  // complete
  return sums;
}

- (NSString *)getCheerMessage:(int)step error:(NSError **)errorPointer {
  
  // complete
  return @"";
}

@end



@interface ObjectiveCPractice : XCTestCase

@end

@implementation ObjectiveCPractice

- (void)setUp {
    // Put setup code here. This method is called before the invocation of each test method in the class.
    HelloLog *helloLog = [[HelloLog alloc] init];
    [helloLog consoleLog];
  }

- (void)tearDown {
    // Put teardown code here. This method is called after the invocation of each test method in the class.
}

- (void)testRandomAssert {
  HelloLog *helloLog = [[HelloLog alloc] init];
  int result = [helloLog getRandom];
  XCTAssertEqual(result, 10);
}

- (void)testRandomIf {
  HelloLog *helloLog = [[HelloLog alloc] init];
  int result = [helloLog getRandom];
  
  if (result < 12) {
    XCTAssertTrue(true);
  } else {
    XCTAssertTrue(false);
  }
}

- (void)testObjComp {
  HelloLog *log1 = [[HelloLog alloc] init];
  HelloLog *log2 = log1;
  
  if ([log1 isEqual:log2]) {
    XCTAssertTrue(true);
  } else {
    XCTAssertTrue(false);
  }
}

- (void)testStringForConcat {
  HelloLog *log = [[HelloLog alloc] init];
  
  NSString *result = [log createSteps:3];
  
  XCTAssertEqualObjects(result,  @"012");
}

- (void)testStringForConcatWithMsg {
  HelloLog *log = [[HelloLog alloc] init];
  
  NSString *result = [log createSteps:3 withEndMsg:@"End Steps warning"];
  
  XCTAssertEqualObjects(result,  @"012End Steps warning");
}

- (void)testHandlingMultiply {
  HelloLog *log = [[HelloLog alloc] init];
  double res = [log handleMultiplying:2 withSecond:2 onEnd:^{
    NSLog(@"Multiplying completed");
  }];
  
  XCTAssertEqual(res, 4);
}

- (void)testCheckArrayPosition {
  int *res = [HelloLog createSumArray:5 initialNum:10];
  /* access the value using the pointer */
  int num = *(res + 4);
  for (int i = 0; i < 5; i++ ) {
       NSLog( @"*(p + %d) : %d\n", i, *(res + i));
    }
  /**
   ex:
    *(p + 0) : 10
    *(p + 1) : 11
    *(p + 2) : 12
    *(p + 3) : 13
    *(p + 4) : 14
   */
  free(res);
  XCTAssertEqual(num, 14);
}

- (void)testUseAndCreateUserStruct {
  struct User userAux;
  userAux.name = @"Edu test";
  user.name = @"Edu test";
  
  XCTAssertEqual(user.name, userAux.name);
}

- (void)testCustomExtensionString {
  NSString *txt = @"Sr";
  NSString *hiTex = [NSString postfixHi:txt];

  XCTAssertEqualObjects(hiTex, @"Sr Hi");
}


- (void)testDefinedMaxMacro {
  XCTAssertEqual(MAXIMUM(10, 5), 10);
}

- (void)testErrorCreate {
  HelloLog *log = [[HelloLog alloc] init];
  NSError *error = nil;
  NSString *res = [log getCheerMessage:2 error:&error];
  
  XCTAssertEqual(res, @"");
  XCTAssertNotNil(error);
  XCTAssertEqual(error.code, 500);
}

@end
```

## Incomplete Steps

Here are some incomplete steps that a developer can follow to practice Objective-C:

 - In the `createSteps:` method, complete the for loop by adding the necessary logic to create a string of numbers from 0 to the given steps parameter. For example, if steps is 5, the string should be "01234".

 - In the `handleMultiplying` method, complete the method by adding the necessary logic to call the multiplyNums block and return the result. The method should also call the callback block after the calculation is done.

 - In the `createSumArray` method, complete the method by allocating memory for an array and then populating the array with the sum of each element, starting from the given initialNum parameter. Then, return the array as a pointer.

 - In the `getCheerMessage` method, complete the method by adding the necessary logic to check if the given step parameter is valid, and if not, create an NSError object with the appropriate error message. If the step is valid, return a string with a cheering message.

 - In the NSString (CustomString) category, complete the `postfixHi:` method by adding the necessary logic to append " Hi" to the given word parameter and return the result as an NSString.

 - In the `testDefinedMaxMacro` test method, is for you to practice how to add a macro flag. Add the right flag so this test can pass.


 ## Learning

 In this tutorial, we will be learning the basics of Objective-C programming language. The main purpose of Objective-C is to add object orientation to the C programming language and classes are the central feature.

### Classes

A class is defined in two different sections, namely @interface and @implementation. The @interface section defines the blueprint for a data type, what the object will consist of, and what operations can be performed. It starts with the keyword @interface followed by a name. For example, we can define a class named "ExampleBox" as follows:

```
@interface ExampleBox { 
	double size;
}
```

We can then create an instance of the ExampleBox class and access its size property like this:

```
ExampleBox *box1 = [[ExampleBox alloc] init];
box1.size;
```

### Structures

Structures let you hold data of different kinds. You use the struct statement to define a structure. For example:

```
struct Student {
    char name[50];
    int age;
    int roll_no;
} student;
```

In this example, we have defined a structure named "Student" with three members - name, age, and roll_no.

### Objective-C Pre-Processor (OCPP)

The Objective-C Pre-Processor (OCPP) is a separate step in the compilation process. It is a text substitution tool and pre-processing before the actual compilation. Some common examples of OCPP are:


```
#define MAX_PROGRESS 20
```

This replaces all instances of MAX_PROGRESS with 20. It's used for constants.

```
#import <Foundation/Foundation.h>
#include “myComponent.h”
```

These statements add their content to the file.

```
#ifdef DEBUG
    // your debug statements
#endif
```

This processes the statements if DEBUG is defined in the -DDEBUG flag.

### Categories

Categories let you extend classes, adding new behaviors to existing classes from Objective-C. For example:

```
@interface NSString (CustomString)
+ (NSString *)postfixHi: (NSString *)word;

@end
```

### Posing

Posing is a technique that allows a class to wholly replace another class within a program. The replacing class is said to "pose as" the target class. However, this feature is deprecated in Mac OS 10.5.

### Protocols

A Protocol is a set of methods that can be implemented by a class. It is similar to an interface in other programming languages. A class can adopt a protocol and implement its methods. A protocol is defined using the @protocol keyword. For example:

```
@protocol ProtocolName
@required
// list of required methods
@optional
// list of optional methods
@end

@interface MyClass : NSObject <ProtocolName>

@end
```

In this example, we have defined a protocol named "ProtocolName" with a required and an optional methods. The MyClass class adopts the ProtocolName protocol and implements its methods.

### typedef

typedef is a keyword that allows you to give a symbolic name to a type. It is similar to #define but the substitution is done at compile time and is limited to giving a symbolic name to types. For example:

```
typedef unsigned char BYTE;
```

### NSLog

NSLog is a function that is used to print logs in Objective-C. It is similar to the printf function in C. You can use NSLog to print messages to the console for debugging purposes. For example:

```
NSLog(@"This is a message");
```

### NSError

NSError is an Objective-C class that encapsulates information about a runtime error that the user needs to be informed about or to handle a case gracefully. It has three main properties:

Domain - The error domain can be one of the predefined NSError domains or an arbitrary string describing a custom domain. The domain must not be nil.
Code - The error code for the error.
User Info - The userInfo dictionary for the error. The userInfo may be nil.
For example:

```
NSError *error;
NSDictionary *userInfo = @{NSLocalizedDescriptionKey : @"An error occurred"};
error = [NSError errorWithDomain:@"com.myapp.error" code:500 userInfo:userInfo];
```

In this example, we are creating an NSError object and setting its properties. The domain is set to "com.myapp.error" and the code is set to 500. The userInfo dictionary contains a localized description of the error. This error can then be passed to other methods or displayed to the user.