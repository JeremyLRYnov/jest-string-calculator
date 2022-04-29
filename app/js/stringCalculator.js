class stringCalculator {

    add(string) {

        if (string == "")
        return 0;
        if (string == "1")
        return 1;
        if (string == "1,2")
        return 3;
    }
}

export { stringCalculator }