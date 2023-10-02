var count = 15
var a = [];

for (var i = 0; i < count; i = i + 1) {
    a.push(customRandom(5, 15))
}

// from, to should be inclusive. from & to должы быть включены
function customRandom(from, to) {
    var r = Math.random()
    return r
}

for (var i = 0; i < a.length; i = i + 1) {
    console.log(a[i])
}