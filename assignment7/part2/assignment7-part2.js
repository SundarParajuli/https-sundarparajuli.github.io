function sum(input) {
    return input.reduce((accumulator, num) => accumulator + num, 0);
}

function multiplyNumber(input) {
    return input.reduce((acc, num) => acc * num, 1);
}

function reverseString(input) {
    return input.split('').reverse().reduce((acc, char) => acc + char, '')
}

function filterLongWords(params, mLen) {
    return params.filter(str => { if (str.length > mLen) return str; });
}
console.log("sum (1,2,3,4) =>", sum([1,2,3,4]))
console.log("multiplyNumber (1,2,3,4)=>", multiplyNumber([1,2,3,4]))
console.log("reverseString (Sundar)=>", reverseString("Sundar"))
console.log("filterLongWords (apple, cat, shuklaphant, vekx yek)=>", filterLongWords(["apple", "cat", "shuklaphant", "vekx yek"], 3))