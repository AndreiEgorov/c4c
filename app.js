let myString =  '5 1 2 + 4 * + 3 -'


const result = (mystr) => {
    let operators = ["+", "-", "*", "/"]
    let newStr = mystr.split('')

    let stack = []
    for (i = 0; i < newStr.length; i++){
        let item = newStr[i]
        if(operators.indexOf(item) != -1 ){

            let lastStackItem = stack.pop()
            let lastButOne = stack.pop()

            if (item === "+"){
                stack.push(+lastButOne + +lastStackItem )
            } else if (item === "-") {
                stack.push(+lastButOne - +lastStackItem )

            } else if (item === "*") {
                stack.push(+lastButOne * +lastStackItem )
            } else if (item === "/") {
                stack.push(+lastButOne / +lastStackItem )
            }

        } else {
            item !== " " && stack.push(item)
        }
    }

    return +stack[0]
}

console.log(result(myString))