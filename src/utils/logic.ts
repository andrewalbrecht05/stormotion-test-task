const computerMove = (n: number, m: number, cur: number): number => {
    const period = n % 2 === 0 ? m + 2 : 2 * m + 2;

    for (let i = Math.min(n,m); i >= 1; i--) {
        if (n - i === 0 || n - i === 1) {
            if ((cur + i) % 2 === 0) {
                return i
            }
        }
    }

    for (let i = Math.min(n, m); i >= 1; i--) {
        if ((n - i) % period == 1)
            return i;
    }

    return 1;
};

export {computerMove};
