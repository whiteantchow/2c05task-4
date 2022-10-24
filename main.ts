let x = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        if (x <= 4) {
            led.plot(x, 0)
            basic.pause(500)
            basic.clearScreen()
            x += 1
        }
        if (x >= 0) {
            led.plot(x, 0)
            basic.pause(500)
            x += -1
        }
    }
})
