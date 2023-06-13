# Interface Segregation Principle Example

# Introduction

This project demonstrates an example implementation of the Interface Segregation Principle using Node.js. Although Node.js does not support multiple inheritance, we simulate it by defining interfaces that support multiple inheritance. The principle allows us to create specialized interfaces that clients can implement selectively based on their specific requirements, promoting code modularity and avoiding unnecessary dependencies.

# Technologies Used
 The project is built using the following technologies:

    Node.js

# Features

    The animal class defines common behaviors that all animals possess, such as eating, sleeping, and breathing.
    The animalCanFly interface defines the fly behavior for animals that can fly.
    The animalCanSwim interface defines the swim behavior for animals that can swim.
    The animalCantFlyCantSwim interface defines the walk behavior for animals that cannot fly or swim.
    The lion class implements the animal and animalCantFlyCantSwim interfaces, representing a lion that can walk, eat, sleep, and breathe.
    The bird class implements the animal and animalCanFly interfaces, representing a bird that can fly, eat, sleep, breathe, and walk.
    The fish class implements the animal and animalCanSwim interfaces, representing a fish that can swim, eat, sleep, breathe, and walk.
    The Penguin class implements the animal and animalCantFlyCantSwim interfaces, representing a penguin that can walk, eat, sleep, and breathe.

# Getting Started
The project is to demonstrates an example implementation of the Interface Segregation Principle using Node.js. Although Node.js does not support
 interfaces so there is no need to run the project 
