---
sidebar_position: 3
---

# Lesson 3: ROS 2 Services - For Direct Requests

We've seen how **Topics** are great for continuous streams of data, like a camera feed. But what if one node needs to ask another node a direct question and get a direct answer back? For example, "What's the robot's current position?" or "Please add these two numbers for me."

This is where **Services** come in.

## What is a Service?

If a Topic is like a public announcement board (one-to-many, fire-and-forget), a Service is like a direct phone call. It's a **one-to-one, request-and-response** communication model.

The two sides of a Service are:
-   A **Service Server**: The node that advertises a service and provides a response when called.
-   A **Service Client**: The node that calls the service with a request and waits until it receives a response.

## How Do Services Work?

Unlike topics, communication via services is **synchronous**. This means when a client calls a service, it pauses its execution and waits until the server has completed the task and sent back a response.

This makes services perfect for tasks that are like remote procedure calls (RPCs) - when one node needs another node to perform a specific computation or action and confirm that it's been done.

**Key differences from Topics:**
-   **Topics**: One-to-many, continuous data streams, asynchronous (fire-and-forget).
-   **Services**: One-to-one, for specific requests, synchronous (request-wait-response).

## Service Types (.srv)

Just like topics have message types, services have **service types**. These are defined in `.srv` files and are split into two parts, separated by `---`:

1.  The **Request**: The data the client sends to the server.
2.  The **Response**: The data the server sends back to the client.

For example, a service to add two numbers might have a service type `example_interfaces/AddTwoInts.srv` that looks like this:

```
int64 a
int64 b
---
int64 sum
```

The client would send two `int64` numbers (`a` and `b`), and the server would send back one `int64` number (`sum`).

## Back to the Kitchen Analogy

Let's use our restaurant analogy one last time:

-   **Topics** are the order tickets on the rail—a continuous stream of information.
-   **Services** are like when the Head Chef needs to know if we have enough of a specific ingredient. The Chef (the **client**) calls the Pantry Manager (the **server**) and asks, "Do we have at least 5kg of flour?" The pantry manager checks and gives a direct "Yes" or "No" answer (the **response**). The Chef waits for that answer before deciding what to do next.

This completes our look at the basic communication patterns in ROS 2! With Nodes, Topics, and Services, you now have the core conceptual tools to understand how a complex robotic system can be built from simple, communicating parts.
