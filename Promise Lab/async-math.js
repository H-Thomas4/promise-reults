let slowMath = (function() {
    const wait = (delay) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, delay);
        });
    };

    function add(val1, val2) {
        return wait(1000)
        .then(() => {
            return negativeCheck(val1, val2);
        }).then((shouldResolve) => {
            if (shouldResolve) {
                return Promise.resolve(+val1 + +val2);
            } else {
                return Promise.reject(new Error(`Error adding values ${val1} and ${val2}.`));
            }
        });
    }

    function subtract(val1, val2) {
        return wait(1000)
        .then(() => {
            return negativeCheck(val1, val2);
        }).then((shouldResolve) => {
            if (shouldResolve) {
                return Promise.resolve(val1 - val2);
            } else {
                return Promise.reject(new Error(`Error subtracting values ${val1} and ${val2}.`));
            }
        });
    }

    function multiply(val1, val2) {
        return wait(1000)
        .then(() => {
            return negativeCheck(val1,val2);
        }).then((shouldResolve) => {
            if (shouldResolve) {
                return Promise.resolve(val1 * val2);
            } else {
                return Promise.reject(new Error(`Error multiplying values ${val1} and ${val2}.`));
            }
        });
    }

    function divide(val1, val2) {
        return wait(1000)
        .then(() => {
            return negativeCheck(val1, val2);
        }).then((shouldResolve) => {
            if (+val2 === 0) {
                return Promise.reject(new Error('Cannot divide by zero.'));
            } else if (shouldResolve) {
                return Promise.resolve(val1 / val2);
            } else {
                return Promise.reject(new Error(`Error dividing ${val1} by ${val2}.`));
            }
        });
    }

    function remainder(val1, val2) {
        return wait(1000)
        .then(() => {
            return negativeCheck(val1, val2);
        }).then((shouldResolve) => {
            if (+val2 === 0) {
                return Promise.reject(new Error('Cannot divide by zero for remainder.'));
            } else if (shouldResolve) {
                return Promise.resolve(val1 % val2);
            } else {
                return Promise.reject(new Error(`Error dividing ${val1} by ${val2} for remainder.`));
            }
        });
    }

    function negativeCheck(val1, val2) {
        return val1 > -1 && val2 > -1;
    }

    return { add, subtract, multiply, divide, remainder };
})();
