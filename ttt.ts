type TicTacToePiece = null | "X" | "O";
type TicTacToePlace = 0 | 1 | 2;
type TicTacToeRow = [TicTacToePiece, TicTacToePiece, TicTacToePiece];
type TicTacToeState = [TicTacToeRow, TicTacToeRow, TicTacToeRow];
class TicTacToeBoard {
    private myBoard: TicTacToeState;
    constructor(state?: TicTacToeState) {
        if (state) {
            this.myBoard = state;
        } else {
            this.myBoard = [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ];
        }
    }

    getPiece(row: TicTacToePlace, column: TicTacToePlace): TicTacToePiece {
        return this.myBoard[row][column];
    }

    getState(): TicTacToeState {
        return this.myBoard;
    }

    getWinState(): TicTacToePiece {
        if (this.myBoard[0][0] === this.myBoard[0][1] && this.myBoard[0][0] === this.myBoard[0][2] && this.myBoard[0][0]) return this.myBoard[0][0];
        if (this.myBoard[1][0] === this.myBoard[1][1] && this.myBoard[1][0] === this.myBoard[1][2] && this.myBoard[1][0]) return this.myBoard[1][0];
        if (this.myBoard[2][0] === this.myBoard[2][1] && this.myBoard[2][0] === this.myBoard[2][2] && this.myBoard[2][0]) return this.myBoard[2][0];
        if (this.myBoard[0][0] === this.myBoard[1][0] && this.myBoard[0][0] === this.myBoard[2][0] && this.myBoard[0][0]) return this.myBoard[0][0];
        if (this.myBoard[0][1] === this.myBoard[1][1] && this.myBoard[0][1] === this.myBoard[2][1] && this.myBoard[0][1]) return this.myBoard[0][1];
        if (this.myBoard[0][2] === this.myBoard[1][2] && this.myBoard[0][2] === this.myBoard[2][2] && this.myBoard[0][2]) return this.myBoard[0][2];
        if (this.myBoard[0][0] === this.myBoard[1][1] && this.myBoard[0][0] === this.myBoard[2][2] && this.myBoard[0][0]) return this.myBoard[0][0];
        return null;
    }

    toString(): string {
        return JSON.stringify(this.myBoard);
    }

    toJSON() {
        return this.myBoard;
    }
}

console.log(""+new TicTacToeBoard().getState())