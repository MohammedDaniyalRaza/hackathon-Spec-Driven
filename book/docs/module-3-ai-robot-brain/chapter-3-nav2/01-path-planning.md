---
sidebar_position: 1
---

# Lesson 1: Nav2 - The Robot's GPS

Our robot can now "see" the world with simulated sensors and can figure out where it is using VSLAM. The next logical step is to enable it to move from one point to another, intelligently and without crashing. This is the task of **navigation**.

In the ROS 2 ecosystem, the premier tool for mobile robot navigation is the **Nav2** stack.

## What is Nav2?

Nav2 is not a single node, but a highly configurable, feature-rich collection of nodes that work together to achieve autonomous navigation. It takes in a map (from your SLAM system), the robot's current location, and a goal location, and it outputs the velocity commands needed to drive the robot to that goal safely.

Nav2 breaks down the complex problem of navigation into two main parts: planning a route and executing that route. This is handled by two key components: the **Global Planner** and the **Local Planner** (also called the Controller).

## The Global Planner: The Big Picture

Imagine you want to drive to a new city. The first thing you do is open Google Maps. You enter your destination, and it calculates the best overall route for your entire journey.

This is exactly what the **Global Planner** does. It looks at the entire map that you've provided and finds an optimal path from the robot's current position to the goal position. This path is "global" because it's based on the static, known map and doesn't account for unexpected or moving obstacles.

## The Local Planner: The Reactive Driver

Now, imagine you're driving along the route that Google Maps gave you. You don't just blindly follow the blue line. You are constantly watching the road immediately in front of you, avoiding potholes, braking for other cars, and steering around cyclists.

This is the job of the **Local Planner**. It takes the path from the global planner as a general guideline, but its main focus is on the here and now. It looks at a small, local window of the map and, more importantly, uses the latest data from the robot's sensors (like a LiDAR scan) to generate immediate velocity commands. Its job is to follow the global path while avoiding any obstacles—static or dynamic—that it detects in its immediate vicinity.

## Costmaps: The Map of Danger

Both planners make their decisions using a data structure called a **costmap**. A costmap is a grid, based on the original map, where the value of each cell represents how "costly" or "dangerous" it is to travel through.
-   Cells with known obstacles (like a wall) have a very high cost.
-   Cells close to obstacles have a medium cost.
-   Wide-open spaces have a low cost.

The planners use algorithms to find a path from the start to the goal that has the lowest possible total cost.

## From Wheels to Legs: Nav2 for Humanoids

Nav2 was originally designed for wheeled robots, and the velocity commands it outputs are typically for moving forward/backward and turning left/right. So how can this be used for a walking humanoid?

The key is to treat Nav2 as a high-level planner. Nav2 provides the desired *direction* and *speed* of the robot's torso. This command is then fed into a separate, more complex **locomotion controller**. This controller's job is to take the simple command (e.g., "move forward at 0.5 m/s") and translate it into the incredibly complex sequence of joint movements required to make the humanoid walk in that direction.

This concludes Module 3! You now have a conceptual understanding of the "brain" of the robot, from advanced simulation and perception to intelligent navigation.
