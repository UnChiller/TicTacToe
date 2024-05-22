type TicTacToePiece = null | "X" | "O";
type TicTacToePlace = 0 | 1 | 2;
type TicTacToeRow = [TicTacToePiece, TicTacToePiece, TicTacToePiece];
type TicTacToeState = [TicTacToeRow, TicTacToeRow, TicTacToeRow];
class TicTacToeBoard {
    private myState: TicTacToeState;
    constructor(state?: TicTacToeState) {
        if (state) {
            this.myState = state;
        } else {
            this.myState = [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ];
        }
    }

    public getPiece(row: TicTacToePlace, column: TicTacToePlace): TicTacToePiece {
        return this.myState[row][column];
    }

    public getState(): TicTacToeState {
        return this.myState;
    }

    public getWinState(): TicTacToePiece {
        if (this.myState[0][0] === this.myState[0][1] && this.myState[0][0] === this.myState[0][2] && this.myState[0][0]) return this.myState[0][0];
        if (this.myState[1][0] === this.myState[1][1] && this.myState[1][0] === this.myState[1][2] && this.myState[1][0]) return this.myState[1][0];
        if (this.myState[2][0] === this.myState[2][1] && this.myState[2][0] === this.myState[2][2] && this.myState[2][0]) return this.myState[2][0];
        if (this.myState[0][0] === this.myState[1][0] && this.myState[0][0] === this.myState[2][0] && this.myState[0][0]) return this.myState[0][0];
        if (this.myState[0][1] === this.myState[1][1] && this.myState[0][1] === this.myState[2][1] && this.myState[0][1]) return this.myState[0][1];
        if (this.myState[0][2] === this.myState[1][2] && this.myState[0][2] === this.myState[2][2] && this.myState[0][2]) return this.myState[0][2];
        if (this.myState[0][0] === this.myState[1][1] && this.myState[0][0] === this.myState[2][2] && this.myState[0][0]) return this.myState[0][0];
        return null;
    }

    protected setPiece(row: TicTacToePlace, column: TicTacToePlace, piece: TicTacToePiece): void {
        this.myState[row][column] = piece;
    }

    public placePiece(row: TicTacToePlace, column: TicTacToePlace, piece: TicTacToePiece): void {
        if (this.myState[row][column]) throw new Error("Location occupied")
        this.setPiece(row, column, piece)
    }

    public toString(): string {
        return JSON.stringify(this.myState);
    }

    public toJSON() {
        return this.myState;
    }
}

//function getFirstOpen(board: TicTacToeBoard) {
//    let state = board.getState();
//    let list = [...state[0],...state[1],...state[2]];
//    
//}

let myBoard = new TicTacToeBoard()
console.log(myBoard)
console.log(myBoard.getWinState())