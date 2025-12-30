---
sidebar_position: 1
---

# Lesson 1: Bridging Python to ROS with `rclpy`

So far, we've talked about the concepts of ROS 2: Nodes, Topics, and Services. Now, let's get practical. How do we actually create these things in code?

While you can write ROS 2 code in C++, the most common and beginner-friendly language for ROS development is **Python**. The magic that allows us to do this is a library called `rclpy`.

## What is `rclpy`?

`rclpy` (ROS Client Library for Python) is the official bridge that lets your Python code talk to the ROS 2 ecosystem. It provides all the tools you need to:

-   Create nodes.
-   Create publishers to send messages on topics.
-   Create subscribers to receive messages from topics.
-   Create service servers and clients.
-   And much more!

Essentially, `rclpy` is your toolkit for building the "brain cells" of your robot using the Python language you already know and love.

## Structure of a Python ROS 2 Node

While we won't dive deep into coding just yet, it's helpful to see the basic structure of a Python node. Most Python nodes you write will follow this pattern:

```python
# Import the rclpy library
import rclpy
# Import the Node class from rclpy
from rclpy.node import Node

# All of your node's logic will live inside a class
class MyFirstNode(Node):

    def __init__(self):
        # Initialize the parent Node class and give your node a name
        super().__init__('my_first_node')
        # Here is where you would create publishers, subscribers, etc.
        self.get_logger().info('Our first node has started!')

def main(args=None):
    # Initialize the rclpy library
    rclpy.init(args=args)

    # Create an instance of your node
    node = MyFirstNode()

    # "Spin" the node, which keeps it running and responsive
    rclpy.spin(node)

    # Clean up and shutdown the node
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

**What's happening here?**

1.  **`rclpy.init()`**: This is the first thing you must do. It initializes the ROS 2 communication system.
2.  **`MyFirstNode()`**: We create an instance of our node class. In its `__init__` function, we give it a unique name. This is the name other tools will use to see and interact with our node.
3.  **`rclpy.spin(node)`**: This is a crucial line. `spin()` essentially puts the node into a loop, waiting for things to happen (like a new message arriving on a topic). Without this, your program would just exit immediately.
4.  **`rclpy.shutdown()`**: This cleans up the ROS 2 resources when the program is finished.

## Why a Bridge?

ROS 2's core is written in C++ for performance. `rclpy` acts as an elegant and "Pythonic" wrapper around this C++ core. This gives you the best of both worlds: the ease of development and vast ecosystem of Python, combined with the high performance of the underlying ROS 2 system.

By using `rclpy`, you can easily integrate powerful Python libraries for AI, computer vision (like OpenCV), and data science (like NumPy) directly into your robotic systems. This is how we build intelligent robots!

In the next chapter, we'll look at another fundamental concept for describing the physical structure of your robot.
