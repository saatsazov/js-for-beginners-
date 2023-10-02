var strs = ["aasd", "bvvv", "bbb"];

// проходится по словам
for (var i = 0; i < strs.length; i = i + 1) {
    console.log("word:", strs[i])
    // проходится по буквам каждого слова
    for (var j = 0; j < strs[i].length; j = j + 1) {
        console.log(strs[i][j])
    }
}