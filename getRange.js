function getRange (amount, firstElementValue, step) {
    let array = [];
    let num = 0;
    if (amount <= 0) {
        return array;
    }
    if (firstElementValue === undefined) {
        firstElementValue = step = 1;
    }
    if (step === undefined) {
        step = 1;
    }
    for (let i=1; i<=amount; i++) {
        array.push(firstElementValue+=num);
        num=step;
    }
    return array;
}
