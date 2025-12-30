---
sidebar_position: 1
---

# Lesson 1: Understanding URDF - The Robot's Blueprint

We've learned how ROS 2 nodes communicate, but how do the different parts of a ROS system know what the robot actually *looks* like? How does a simulation tool know the shape of our robot, or how its arms and wheels are supposed to move?

The answer is the **Unified Robot Description Format**, or **URDF**.

## What is URDF?

URDF is an XML-based file format that allows you to create a complete 3D model of your robot's physical structure. Think of it as the robot's architectural blueprint. It describes every part of the robot and how those parts are connected to each other.

This blueprint is essential for many core robotics tasks:
-   **Simulation:** Simulators like Gazebo use the URDF file to create a virtual version of your robot that can interact with a simulated world.
-   **Visualization:** Tools like RViz use the URDF to display a 3D model of your robot, allowing you to see its status and sensor data in real-time.
-   **Kinematics & Dynamics:** ROS libraries use the URDF to calculate how the robot's limbs will move and how it will be affected by forces like gravity.

A URDF file is made up of two fundamental components: **links** and **joints**.

## Links: The Physical Parts

A **`<link>`** element represents a single, rigid part of your robot. This could be a wheel, a leg, the main chassis, a gripper, or a camera housing.

Each link has several properties you can define:
-   **`<visual>`**: This describes what the link looks like. You can define its shape (like a box, cylinder, or sphere) or, more commonly, point to a 3D mesh file (like a `.stl` or `.dae` file) for a more detailed look.
-   **`<collision>`**: This defines the physical boundary of the link for the physics simulator. It's often a simpler shape than the visual model to speed up collision-checking calculations.
-   **`<inertial>`**: This defines the link's mass and rotational inertia properties, which are crucial for realistic physics simulation.

## Joints: The Connections

A **`<joint>`** element describes how two links are connected and how they can move relative to each other. Every joint connects a `parent` link to a `child` link.

There are several types of joints:
-   **`revolute`**: A rotating joint with defined upper and lower angle limits, like an elbow or a knee joint.
-   **`continuous`**: A rotating joint with no limits, like a wheel that can spin forever.
-   **`prismatic`**: A sliding joint that moves along an axis, like a piston.
-   **`fixed`**: A joint that doesn't move at all. This is used to rigidly connect two links together to form a more complex shape.

By defining all the links of your robot and connecting them with joints, you create a complete, movable tree structure that represents your entire robot. For a humanoid, this would be a complex tree of links for the torso, head, arms, and legs, all connected by revolute joints.

This concludes Module 1! You now understand the three most fundamental concepts in ROS: how to organize your code (**Nodes**), how your code can communicate (**Topics** and **Services**), and how to describe your robot's physical form (**URDF**). You're well on your way to building a complete robotic system.
