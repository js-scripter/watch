function showTime () {
    if (steps > 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    }
    if (hour == 1) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (hour == 2) {
        basic.showLeds(`
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (hour == 3) {
        basic.showLeds(`
            # # # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (hour == 4) {
        basic.showLeds(`
            # # # # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (hour == 5) {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (hour == 6) {
        basic.showLeds(`
            # # # # #
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (hour == 7) {
        basic.showLeds(`
            # # # # #
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (hour == 8) {
        basic.showLeds(`
            # # # # #
            # # # . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (hour == 9) {
        basic.showLeds(`
            # # # # #
            # # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (hour == 10) {
        basic.showLeds(`
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (hour == 11) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # . . . .
            . . . . .
            . . . . .
            `)
    }
    if (hour == 12) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # . . .
            . . . . .
            . . . . .
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    if (hour < 12) {
        hour += 1
    } else {
        hour = 1
        steps = 2000
    }
    showTime()
    seconds = 1
})
input.onButtonPressed(Button.B, function () {
    if (seconds < 3600) {
        seconds += 1200
    } else {
        seconds = 1
    }
})
let seconds = 0
let steps = 0
let hour = 0
hour = 12
led.setBrightness(20)
loops.everyInterval(1000, function () {
    if (seconds < 3600) {
        seconds += 1
        showTime()
    } else {
        if (hour < 12) {
            hour += 1
        } else {
            hour = 1
            steps = 2000
        }
        seconds = 1
        showTime()
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        steps = steps - 1
    }
})
