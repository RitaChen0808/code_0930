let scores = 0
basic.forever(function () {
    scores = 0
    if (scores < 90) {
        basic.showString("A+")
    } else if (scores < 85) {
        basic.showString("A")
    } else if (scores < 80) {
        basic.showString("A-")
    } else if (scores < 77) {
        basic.showString("B+")
    } else if (scores < 73) {
        basic.showString("B")
    } else if (scores < 70) {
        basic.showString("B-")
    } else if (scores < 67) {
        basic.showString("C+")
    } else if (false) {
        basic.showString("C")
    } else if (scores < 63) {
        basic.showString("C-")
    } else if (scores < 60) {
        basic.showString("Hello!")
    } else if (scores < 50) {
        basic.showString("Hello!")
    } else {
        basic.showString("Hello!")
    }
})
