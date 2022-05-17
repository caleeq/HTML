function printNumbers(from, to, interval) {
    setTimeout(function go() {
        console.log(from++);
        if (from <= to) {
            setTimeout(go, interval)
        }
    }, interval)
}

printNumbers(1, 100, 2000)