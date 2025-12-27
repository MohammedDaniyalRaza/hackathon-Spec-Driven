---
sidebar_position: 3
---

# Lesson 1.3: The Sense-Think-Act Cycle

## Introduction

In this lesson, we will explore the fundamental concept that drives all intelligent systems: the Sense-Think-Act cycle. This is the loop that allows an AI to perceive its environment, make a decision, and take an action.

## Core Concept

The Sense-Think-Act cycle can be broken down into three stages:

1.  **Sense**: The AI uses its sensors to gather information about its environment. This could be anything from detecting an object with a camera to measuring the temperature with a thermometer.
2.  **Think**: The AI processes the information it has gathered and decides what to do next. This is the "brain" of the operation, where the AI's logic and intelligence reside.
3.  **Act**: The AI uses its actuators to take an action in the physical world. This could be moving a robotic arm, making a sound, or turning on a light.

This cycle repeats continuously, allowing the AI to react and adapt to changes in its environment.

## Hands-On Example

Let's expand on our previous "Hello, World!" example. This time, we'll add a "Sense" component: a button.

For this example, you will need:

-   An Arduino Uno
-   A USB cable
-   A breadboard
-   A push button
-   Jumper wires

### The Code

```cpp
const int buttonPin = 2;     // the number of the pushbutton pin
const int ledPin =  13;      // the number of the LED pin

int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT);
}

void loop() {
  // Sense
  buttonState = digitalRead(buttonPin);

  // Think
  if (buttonState == HIGH) {
    // Act
    digitalWrite(ledPin, HIGH);
  } else {
    // Act
    digitalWrite(ledPin, LOW);
  }
}
```

In this example, the Arduino is constantly **sensing** the state of the button. It **thinks** about whether the button is pressed or not. And it **acts** by turning the LED on or off accordingly.

## Summary

You have now learned about the Sense-Think-Act cycle, the fundamental loop that powers all intelligent systems. You have also seen a practical example of how to implement this cycle using an Arduino. In the next chapter, we will dive deeper into the world of sensors and actuators.