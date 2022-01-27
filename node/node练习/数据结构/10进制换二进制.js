let s = [];
let divder = 0;
let remainder = 0;
let str = '';
const stack = (num) => {

    if (num > 1) {
        divder = parseInt(num / 2);
        remainder = num % 2;
        s.push(remainder)
        stack(divder)
    } else {
        s.push(num)
        while (!s.length == 0) {
            str += s.pop()
        }
        console.log(str)
    }

}

stack(800)