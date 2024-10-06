
class Computer {
    dp: number[][];
    move: number[][];
    period: number;

    constructor(n: number, m: number) {
        this.dp = Array.from({length: n + 1}, () => Array(5).fill(0));
        this.move = Array.from({length: n + 1}, () => Array(5).fill(1));
        this.period = m % 2 === 0 ? m + 2 : 2 * m + 2;
        this.initBase();
        this.initPeriod(n, m);
        this.fill(n);
        //console.log("DP ARRAY: ", this.dp);
        //console.log("MOVES ARRAY: ", this.move);
    }

    private initBase() {
        this.dp[0][1] = 1;
        this.dp[0][2] = 1;
        this.dp[0][3] = 0;
        this.dp[0][4] = 0;
        this.dp[1][1] = 0;
        this.dp[1][2] = 1;
        this.dp[1][3] = 1;
        this.dp[1][4] = 0;
    }

    private initPeriod(n: number, m: number) {
        for (let i = 2; i <= Math.min(n, this.period - 1); i++) {
            let mx1 = 0, mn2 = 1, mx3 = 0, mn4 = 1;
            for (let k = i - 1; k >= Math.max(0, i - m); k--) {
                if (mx1 < this.dp[k][2 * Number((i - k) % 2 != 0) + 2]) {
                    mx1 = this.dp[k][2 * Number((i - k) % 2 != 0) + 2];
                    this.move[i][1] = i - k;
                }
                if (mx3 < this.dp[k][2 * Number((i - k) % 2 == 0) + 2]) {
                    mx3 = this.dp[k][2 * Number((i - k) % 2 == 0) + 2];
                    this.move[i][3] = i - k;
                }
                if (mn2 > this.dp[k][1]) {
                    mn2 = this.dp[k][1];
                    this.move[i][2] = i - k;
                }
                if (mn4 > this.dp[k][3]) {
                    mn4 = this.dp[k][3];
                    this.move[i][4] = i - k;
                }
            }
            this.dp[i][1] = mx1;
            this.dp[i][2] = mn2;
            this.dp[i][3] = mx3;
            this.dp[i][4] = mn4;
        }
    }

    private fill(n: number) {
        for (let i = this.period; i <= n; i++) {
            this.dp[i][1] = this.dp[i % this.period][1];
            this.dp[i][2] = this.dp[i % this.period][2];
            this.dp[i][3] = this.dp[i % this.period][3];
            this.dp[i][4] = this.dp[i % this.period][4];
            this.move[i][1] = this.move[i % this.period][1];
            this.move[i][2] = this.move[i % this.period][2];
            this.move[i][3] = this.move[i % this.period][3];
            this.move[i][4] = this.move[i % this.period][4];
        }
    }

    public makeMove(n: number, playerScore: number) {
        if (playerScore % 2 == 0) {
            return this.move[n][2];
        }
        return this.move[n][4];
    }
}

export default Computer;
