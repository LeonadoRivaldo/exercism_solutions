export class Matrix {
  private matrix: string;
  private matrixRows: number[][] = [];
  private matrixColumns: number[][] = [];
  
  constructor(matrix: string) {
      this.matrix = matrix;
      const rows = this.matrix.split('\n').map(row => row.split(" ").map(v => parseInt(v)));
      this.matrixRows = rows

      let y = rows.length;
      let x = rows[0].length;
      for (let col = 0; col < x; col++) {
        const column: number[] = [];

        for (let row = 0; row < y; row++) {
          column.push(rows[row][col]);
        }

        this.matrixColumns.push(column);
      }

  }

  get rows(): number[][] {
    return this.matrixRows;
  }

  get columns(): number[][] {
    return this.matrixColumns;
  }
}