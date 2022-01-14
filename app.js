console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
    let sum = 0;

    arr.forEach(function (num) {
        sum += num;
    });

    return sum;
}

let result = numbers.reduce(function(sum, num) {
    console.log( sum, num)
    return sum + num;
}, 0);

console.log(result);




// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const book = {};

book.title = prompt("What is the title of your favorite book?");
book.author = prompt("What is the author of your favorite book?");
book.pageCount = prompt("How many page does your favorite book have?");
book.readCount = prompt("How many times have you read your favorite book?");

book.info = function () {
    return `${this.title} by ${this.author} is ${this.pageCount} pages long, and has been read ${this.readCount} time(s).`;
}

console.log(book.info());


