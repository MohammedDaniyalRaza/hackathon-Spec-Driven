---
sidebar_position: 2
---

# Lesson 1.2: Your First "Hello, World!" in Physical AI

## Introduction

In the world of programming, the first thing you learn is how to print "Hello, World!". In Physical AI, the equivalent is making something happen in the real world, like blinking an LED. In this lesson, you will build your very first Physical AI system using an Arduino Uno to do just that.

## Core Concept

The goal of this lesson is to create a simple system that demonstrates the Sense-Think-Act cycle. However, for our "Hello, World!", we will focus on the "Act" part. We will write a program that tells the Arduino to turn an LED on and off.

## Hands-On Example

For this example, you will need:

-   An Arduino Uno
-   A USB cable
-   The Arduino IDE (Integrated Development Environment) installed on your computer

### The Code

Here is the code you will upload to your Arduino:

```cpp
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);                       // wait for a second
  digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);                       // wait for a second
}
```

### Steps

1.  Connect your Arduino Uno to your computer using the USB cable.
2.  Open the Arduino IDE.
3.  Copy and paste the code above into the IDE.
4.  Go to **Tools > Board** and select "Arduino Uno".
5.  Go to **Tools > Port** and select the port your Arduino is connected to.
6.  Click the "Upload" button.

You should see the built-in LED on your Arduino board start to blink!

## Summary

Congratulations! You have just built your first Physical AI system. You have successfully made a computer program affect the physical world. In the next lesson, we will explore the Sense-Think-Act cycle in more detail.