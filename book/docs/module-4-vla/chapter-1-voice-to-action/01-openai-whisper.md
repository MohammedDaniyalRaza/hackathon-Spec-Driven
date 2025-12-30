---
sidebar_position: 1
---

# Lesson 1: Voice-to-Action with OpenAI Whisper

Welcome to the final module, where we bring everything together to create a truly intelligent and interactive robot. We'll start by giving our robot the ability to understand human speech.

For decades, we have commanded robots with joysticks, buttons, and code. The next frontier is **natural language**. Instead of programming a robot to go to the kitchen, we want to be able to simply *tell* it, "Go to the kitchen."

The first step in this process is converting our spoken words into written text. This is a task called **Speech-to-Text (STT)**, and one of the most powerful tools for this job is **OpenAI's Whisper**.

## What is OpenAI Whisper?

Whisper is a general-purpose speech recognition model. It is trained on a massive and diverse dataset of audio from the internet, and it can transcribe spoken language into text with remarkable accuracy, even in noisy environments or with different accents.

It's the same technology behind many transcription services and voice assistants, and we can leverage it to create a voice interface for our robot.

## How to Use Whisper in a ROS 2 System

Integrating Whisper follows a clear and modular ROS 2 pattern:

1.  **The Microphone Node:** A simple ROS 2 node is created whose only job is to listen to the robot's microphone. It uses a standard Python library (like `sounddevice`) to capture chunks of audio.
2.  **Publish Audio Data:** This `microphone_node` publishes the raw audio data onto a ROS 2 topic, let's call it `/audio/raw`. The message type would be a custom or standard audio message.
3.  **The Whisper Node:** A second, more specialized ROS 2 node subscribes to the `/audio/raw` topic. We can call this the `whisper_node`.
4.  **Transcribe the Audio:** When the `whisper_node` receives audio data, its job is to send that data to the Whisper model. This can be done by making an API call to OpenAI's servers or, for more advanced applications, by running a local version of the Whisper model on the robot's own hardware (if it's powerful enough).
5.  **Publish the Command:** Whisper processes the audio and returns the transcribed text. The `whisper_node` then takes this text (e.g., "bring me the red ball") and publishes it as a simple `std_msgs/String` message onto a new ROS 2 topic, like `/voice_command`.

## The Result: A Stream of Commands

The output of this pipeline is a ROS 2 topic that carries the text of any command spoken by a user.

Now, any other part of the robot's brain can subscribe to `/voice_command` to act on it. A navigation node could listen for keywords like "go to" or "move to," and a manipulation node could listen for "pick up" or "grab."

But this leads to a new, more complex problem: how does the robot understand the *meaning* and *intent* behind the string of text "bring me the red ball"? That is the challenge of cognitive planning, which we will cover in our next lesson.
