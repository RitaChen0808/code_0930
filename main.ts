let scores = 0
input.onPinPressed(TouchPin.P0, function () {
    scores = 0
    if (scores < 90) {
        basic.showString("A+")
    } else if (scores < 85) {
        basic.showString("A")
    } else if (scores < 80) {
        basic.showString("A-")
    }
})
