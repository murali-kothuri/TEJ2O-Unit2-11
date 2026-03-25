/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Murali Kothuri
 * Created on: Mar 2026
 * This program is the random integer generator
*/


let number1 = randint(0, 99);
let number2 = randint(0, 99);

// setup
basic.clearScreen();
basic.showIcon(IconNames.Happy);

// button A
input.onButtonPressed(Button.A, function () {
    basic.showString(" #:" + number1);
    basic.showIcon(IconNames.Happy);
});

// button B
input.onButtonPressed(Button.B, function () {
    basic.showString(" #:" + number2);
    basic.showIcon(IconNames.Happy);
});

// shake
input.onGesture(Gesture.Shake, function () {
    if (number1 < number2) {
        basic.showString( number1 + "<" + number2);
        basic.showIcon(IconNames.Sad);
    } else { 
        (number1 > number2) 
        basic.showString( number1 + ">" + number2);
        basic.showIcon(IconNames.Sad);
    }
});
