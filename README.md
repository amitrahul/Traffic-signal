Build a traffic light where the lights switch from green to yellow to red after predetermined intervals and loop indefinitely. Each light should be lit for the following durations:

#
* Red light: 4000ms
* Yellow light: 500ms
* Green light: 3000ms

# Implementation,
Traffic lights are simple state machines where each color is a state and each state is shown for a fixed duration before moving to the next. We can capture the state information (how long to remain in each color for and which color to transition to) using a simple JavaScript object.

