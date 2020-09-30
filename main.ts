let scores = 0
input.onPinPressed(TouchPin.P0, function () {
    scores = randint(80, 100)
    basic.showNumber(scores)
    if (scores < 85) {
        basic.showString("A-")
    } else if (scores < 90) {
        basic.showString("A")
    } else {
        basic.showString("A+")
    }
})
