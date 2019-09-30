let rpnProblem =  '5 1 2 + 4 * + 3 -'


const result = (rpnProblemStr) => {
    let operators = ["+", "-", "*", "/"]
    let stack = []
    for (i = 0; i < rpnProblemStr.length; i++){
        let item = rpnProblemStr[i]
        
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

console.log(result(rpnProblem))