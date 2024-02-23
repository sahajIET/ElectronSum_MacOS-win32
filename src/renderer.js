function calculateSum() {
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
        const num = parseFloat(document.getElementById('num' + i).value);
        if (!isNaN(num)) {
            sum += num;
        }
    }
    document.getElementById('result').innerText = `Sum: ${sum}`;
}
