class stringCalculator {

    add(str) {

        let numbersTable = str.match(/\-*\d+/g);

        let calcul = 0;
        let negativeNumbersTable = [];

        for (var i in numbersTable) {

            if (Number(numbersTable[i]) < 0) {

                negativeNumbersTable.push(parseInt(numbersTable[i], 10))
            } else {

                calcul += parseInt(numbersTable[i], 10)
            }
        }
        if (negativeNumbersTable.length > 0) {

            throw Error("Negatives not allowed")
        }

        return calcul;
    }
}

// let message = "//;\n1;2";
// let numbersTableTest = message.match(/\-*\d+/g);
// let negativeNumbersTableTest = [];
// let calculTest = 0
// for (var i in numbersTableTest) {

//     if (Number(numbersTableTest[i]) < 0) {

//         negativeNumbersTableTest.push(parseInt(numbersTableTest[i], 10))
//     } else {

//         calculTest += parseInt(numbersTableTest[i], 10)
//     }
// }
// console.log(numbersTableTest)
// console.log(negativeNumbersTableTest.length)
// console.log(calculTest)


export { stringCalculator }