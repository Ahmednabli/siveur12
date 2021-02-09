let left = 0
let right = 0
motorbit.freestyle(60, 60)
pins.setPull(DigitalPin.P3, PinPullMode.PullUp)
pins.setPull(DigitalPin.P4, PinPullMode.PullUp)
basic.forever(function () {
    right = pins.digitalReadPin(DigitalPin.P4)
    left = pins.digitalReadPin(DigitalPin.P3)
    if (right) {
        motorbit.freestyle(30, 80)
        while (right) {
            right = pins.digitalReadPin(DigitalPin.P4)
            motorbit.freestyle(30, 80)
        }
    } else if (left) {
        motorbit.freestyle(80, 30)
        while (left) {
            left = pins.digitalReadPin(DigitalPin.P3)
            motorbit.freestyle(80, 30)
        }
    } else {
        motorbit.freestyle(60, 60)
    }
})
