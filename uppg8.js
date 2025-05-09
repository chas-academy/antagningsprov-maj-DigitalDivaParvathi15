
function uppg8() {
    // Skapa en array med fem personobjekt
    const people = [
        { name: "Swapna", age: 28 },
        { name: "Nordic", age: 35 },
        { name: "Maria", age: 42 },
        { name: "parvathi", age: 25 },
        { name: "Sachin", age: 31 }
    ];

    // Skapa en funktion som tar in en array som argument
    function printNamesOver30(arr) {
        // Skapa ett konditionsvillkor som gör att det bara är namnet på personerna
        // som är över 30 år som skrivs ut i konsolen
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].age > 30) {
                console.log(arr[i].name);
            }
        }
    }

    // Anropa funktionen och skicka med arrayen som argument
    printNamesOver30(people);
}

module.exports = { uppg8 };
