let scores = 0
basic.forever(function () {
    scores = 0
    if (scores < 90) {
        basic.showString("A+")
    } else if (scores < 85) {
        basic.showString("A")
    } else if (scores < 80) {
        basic.showString("A-")
    }
})
