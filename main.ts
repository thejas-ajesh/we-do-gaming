input.onButtonPressed(Button.A, function () {
    sprite = fast
})
function out_gaming_tune () {
    music.playMelody("C5 E C5 A F F A F ", 120)
}
function out_fail () {
    music.playMelody("C5 B A G F E D C ", 120)
}
let sprite = 0
let fast = 0
music.setVolume(255)
let really_bad_hair_day = randint(10, 19)
fast = randint(10, 19)
let your_hair_is_on_fire = randint(10, 19)
loops.everyInterval(fast, function () {
    fast = randint(10, 19)
})
loops.everyInterval(really_bad_hair_day, function () {
    really_bad_hair_day = randint(10, 19)
})
loops.everyInterval(your_hair_is_on_fire, function () {
    your_hair_is_on_fire = randint(10, 19)
})
loops.everyInterval(100, function () {
    while (true) {
        if (0 == 0) {
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.digitalWritePin(DigitalPin.P14, 0)
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.digitalWritePin(DigitalPin.P14, 1)
            if (your_hair_is_on_fire == really_bad_hair_day) {
                out_fail()
            }
            if (!(your_hair_is_on_fire == really_bad_hair_day)) {
                out_gaming_tune()
            }
            if (sprite == really_bad_hair_day) {
                music.playMelody("C5 B A F E F E A ", 120)
            }
        }
    }
})
