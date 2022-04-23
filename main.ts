input.onButtonPressed(Button.A, function () {
    sprite = fast
})
function out_gaming_tune () {
    music.playMelody("C5 E C5 A F F A F ", 120)
}
function out_fail () {
    music.playTone(554, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Breve))
}
let sprite = 0
let fast = 0
let really_bad_hair_day = randint(10, 1000)
fast = randint(10, 100)
let your_hair_is_on_fire = randint(10, 10000)
loops.everyInterval(fast, function () {
    fast = randint(10, 100)
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
})
loops.everyInterval(really_bad_hair_day, function () {
    really_bad_hair_day = randint(10, 1000)
})
loops.everyInterval(your_hair_is_on_fire, function () {
    your_hair_is_on_fire = randint(10, 1000)
})
