class stringCalculator {

    add(str) {

        let numbersTable = str.match(/\d+/g);

        let calcul = 0;

        for (var i in numbersTable) {

            calcul += Number(numbersTable[i])
        }
        
        return calcul;
    }
}

export { stringCalculator }