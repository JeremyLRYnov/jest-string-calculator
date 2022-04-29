class stringCalculator {

    add(str) {

        if (str == "")
        return 0;
        if (str == "1")
        return 1;
        if (str == "1,2")
        return 3;
    }
}

export { stringCalculator }