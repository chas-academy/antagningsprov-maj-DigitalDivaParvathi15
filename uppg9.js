

function uppg9() {
    function sort(numbers) {
        for (let num of numbers) {
            if (num % 2 === 0) {
                // Log the number and label as separate arguments
                console.log(num, 'jämt');
            } else {
                console.log(num, 'udda');
            }
        }
    }
    sort([100, 120, 70, 20, 90, 150, 110]);
}

module.exports = { uppg9 };
