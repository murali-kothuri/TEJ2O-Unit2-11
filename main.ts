/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Murali Kothuri
 * Created on: Mar 2026
 * This program generates 2 random integers from 0 to 99.
*/

// variables
let number1: number = randint(0, 99)
let number2: number = randint(0, 99)

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)


// button A
input.onButtonPressed(Button.A, function () {
    basic.showString("#1:" + number1)
    basic.showIcon(IconNames.Happy)
})

// button B
input.onButtonPressed(Button.B, function () {
    basic.showString("#2:" + number2)
    basic.showIcon(IconNames.Happy)
})

// shake
input.onGesture(Gesture.Shake, function () {
    if (number1 < number2) {
        basic.showString(number1 + "<" + number2)
    } else if (number1 > number2) {
        basic.showString(number1 + ">" + number2)
        basic.showIcon(IconNames.Sad)
    }
    basic.showIcon(IconNames.Sad)
})
