---
sidebar_position: 2
---

# Lesson 2: ROS 2 Topics - The Communication Channels

In our last lesson, we learned about **Nodes**, the specialized workers in our robot's software. But how do these workers talk to each other? If the `camera_node` has a new image, how does it give that image to the `navigation_node`?

The answer is **Topics**.

## What is a Topic?

A ROS 2 Topic is like a public announcement board or a radio channel. It's a named channel where nodes can send (or **publish**) data for any other node to see (or **subscribe** to).

-   A node that sends data to a topic is called a **Publisher**.
-   A node that receives data from a topic is called a **Subscriber**.

This is one of the most important concepts in ROS: the **Publisher-Subscriber** (or "Pub/Sub") model.

## How Does it Work? The "Fire and Forget" Model

The key feature of topics is that they decouple the publisher from the subscriber.

Imagine our `camera_node` from the last lesson. It's publishing images to a topic named `/robot/camera/image`.

The `camera_node` doesn't know or care if anyone is listening. It just keeps publishing the latest images to that topic—it "fires and forgets."

Meanwhile, we could have several other nodes subscribing to that same topic:
-   An `image_viewer_node` could subscribe to display the images on a screen for a human to see.
-   An `object_detection_node` could subscribe to look for specific objects in the images.
-   A `recording_node` could subscribe to save the video feed to a file.

These subscriber nodes don't need to know where the images are coming from. They just know that if they listen to the `/robot/camera/image` topic, they will get images. This makes the system incredibly flexible. You can add or remove subscribers at any time without having to change the `camera_node` at all!

## Message Types: A Common Language

There's one important rule: all data published to a specific topic **must have the same data type**, known as a **Message Type**.

A message type is simply a defined structure for the data. For example:
-   A topic for motor commands might use the `geometry_msgs/Twist` message type, which has fields for linear and angular velocity.
-   A topic for camera images would use the `sensor_msgs/Image` message type.
-   A simple status topic might just use a `std_msgs/String` message type.

This ensures that when a subscriber receives data, it knows exactly how to interpret it.

## Back to the Kitchen Analogy

Let's revisit our restaurant kitchen:

-   **Topics** are the order tickets.
-   The **Waiter** node *publishes* a new order to the `/kitchen/orders` topic.
-   The **Chef** node is a *subscriber* to the `/kitchen/orders` topic. When a new order ticket appears, the Chef reads it and knows what to cook.

The waiter doesn't hand the order directly to the chef. They just put it on the ticket rail (the topic), and the chef takes it when they're ready. This way, you could have multiple chefs subscribing to the same order rail, or a manager node that also subscribes to see how busy the kitchen is.

In our next lesson, we'll discuss a different way for nodes to communicate for direct requests and responses: **Services**.
