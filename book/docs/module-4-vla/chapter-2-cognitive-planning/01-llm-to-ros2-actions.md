---
sidebar_position: 1
---

# Lesson 1: Cognitive Planning with LLMs

In our last lesson, we successfully converted a spoken command into a simple string of text using OpenAI Whisper. Our robot now knows the user said, "Please go to the kitchen and get me a can of soda."

But what does it *do* with that information? How does it get from a simple string of text to a sequence of concrete actions? This is the challenge of **Cognitive Planning**, and the tool we'll use to solve it is a **Large Language Model (LLM)**, like the one that powers ChatGPT.

## The LLM as a Reasoning Engine

An LLM is more than just a text generator; it's a powerful reasoning engine. It can understand context, break down complex requests into simple steps, and generate structured output. We can leverage this to create a "planner" for our robot.

This is accomplished with a new ROS 2 node, which we can call the `llm_planner_node`.

1.  This node subscribes to the `/voice_command` topic we created in the last lesson.
2.  When it receives a command (e.g., "get me a can of soda from the kitchen"), its job is to consult the LLM to turn that command into a concrete plan.
3.  Once it has a plan, it acts as an "action executor," going through the plan step-by-step to command the other parts of the robot.

## Prompt Engineering: Giving the LLM Context

The key to making this work is **Prompt Engineering**. We don't just send the raw text "get me a can of soda" to the LLM. We wrap it in a carefully crafted prompt that gives the LLM all the context it needs to be a useful robot planner.

A simplified version of the prompt might look like this:

> **System Prompt:** You are a helpful robot assistant named "RoboBot". You are located in the living room. The user is also in the living room. You are capable of the following actions:
> - `navigate(location)`: Moves the robot to a specified location. Available locations are: `['living room', 'kitchen', 'bedroom']`.
> - `find_object(object_name)`: Uses the camera to locate a specific object.
> - `pickup_object(object_name)`: Picks up a specified object.
> - `hand_object_to_user()`: Delivers the held object to the user.
>
> Your task is to convert a user's command into a JSON list of actions.
>
> **User Command:** "Please go to the kitchen and get me a can of soda."

## From Prompt to Plan

When the LLM receives this detailed prompt, it has all the information it needs. It knows what it can do, where it is, and what the user wants. It can then reason about the request and generate a structured plan as a JSON array:

```json
[
  {
    "action": "navigate",
    "parameters": {"location": "kitchen"}
  },
  {
    "action": "find_object",
    "parameters": {"object_name": "soda can"}
  },
  {
    "action": "pickup_object",
    "parameters": {"object_name": "soda can"}
  },
  {
    "action": "navigate",
    "parameters": {"location": "living room"}
  },
  {
    "action": "hand_object_to_user",
    "parameters": {}
  }
]
```

## Executing the Plan

The `llm_planner_node` receives this JSON array from the LLM. Now, it's no longer a planner; it's an **executor**. It iterates through the list, and for each item, it calls the appropriate ROS 2 action or service.

-   For the first step, it would make a call to the Nav2 action server with the goal `kitchen`.
-   Once that's complete, it would call a perception service to find the `soda can`.
-   ...and so on, until the plan is complete.

This architecture is incredibly powerful. By simply changing the text in the prompt, you can add new abilities, new locations, and new rules to your robot without writing complex logic. The LLM does the reasoning for you. This is the core of what a Vision-Language-Action (VLA) model enables.
