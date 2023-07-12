const resultSpan = document.querySelector('#result-span')
const stack = []
function pressNumberButton(number) {
    const current = getCurrentResult();

    if (current === "0") {
        resultSpan.innerHTML = number
    } else {
        resultSpan.innerHTML += number
    }

}

function clickPeriod() {
    const current = getCurrentResult()

    if (current.includes(',')) return

    setCurrentResult(`${current},`)
}

function processOperator(operator) {
    const current = getCurrentResult()

    if (operator === 'x') {
        stack.push(parseFloat(current), '*')
    } else if (operator === '&divide') {
        stack.push(parseFloat(current), '/')
    } else {
        stack.push(current, operator)
    }

    setCurrentResult(0)
}

function pressEqual() {
    const current = getCurrentResult()
    stack.push(current)
    const calculatedResult = calculate()
    setCurrentResult(calculatedResult)
}

function clickPercentage() {
    const current = getCurrentResult()
    const result = eval(`${current}/100`)
    setCurrentResult(result)
    clearStack()
}

function toggleNegative() {
    const current = getCurrentResult()
    const toggleResult = eval(`${current} * -1`)
    setCurrentResult(toggleResult)
}

function getCurrentResult() {
    return resultSpan.innerHTML
}

function setCurrentResult(result) {
    resultSpan.innerHTML = result
}

function clearResult() {
    setCurrentResult(0)
    clearStack()
}

function calculate() {
    const input = stack.join("")
    const result = eval(input)
    clearStack()

    return result;
}

function clearStack() {
    stack.splice(0, stack.length)
}
