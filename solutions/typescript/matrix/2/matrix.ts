export class Matrix {
  private matrix: string;
  private matrixRows: number[][] = [];
  private matrixColumns: number[][] = [];
  
  constructor(matrix: string) {
      this.matrix = matrix;
      const rows = this.matrix.split('\n').map(row => row.split(" ").map(Number));
      this.matrixRows = rows
      this.matrixColumns = rows[0].map((value, i) => {
        return rows.map(row => {
          return row[i];
        })
      });

  }

  get rows(): number[][] {
    return this.matrixRows;
  }

  get columns(): number[][] {
    return this.matrixColumns;
  }
}