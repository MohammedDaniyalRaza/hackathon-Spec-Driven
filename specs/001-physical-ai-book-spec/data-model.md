# Data Model: Physical AI Book

**Date**: 2025-12-27

## Summary

This document describes the data model for the "Physical AI Book". As this is a content-based project, the data model refers to the structure of the content itself, rather than a database schema.

## Content Entities

### 1. Book
The root entity that represents the entire collection of content.

- **Attributes**:
    - `title`: The title of the book (e.g., "Physical AI").
    - `introduction`: An introductory page for the entire book.
    - `chapters`: A collection of Chapter entities.

### 2. Chapter
A logical grouping of lessons, representing a major section of the book.

- **Attributes**:
    - `title`: The title of the chapter (e.g., "Chapter 1: Introduction to Physical AI").
    - `description`: A brief summary of the chapter's content.
    - `lessons`: A collection of Lesson entities.
- **Relationships**:
    - Belongs to one `Book`.
    - Has many `Lessons`.

### 3. Lesson
A single, self-contained instructional unit.

- **Attributes**:
    - `title`: The title of the lesson (e.g., "What is Physical AI?").
    - `content`: The body of the lesson in Markdown format.
    - `format`: Follows a consistent structure (Introduction, Core Concept, Hands-On Example, Summary).
- **Relationships**:
    - Belongs to one `Chapter`.
