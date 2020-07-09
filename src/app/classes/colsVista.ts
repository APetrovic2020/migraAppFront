export class ColsVista {
    owner: string;
    tableName: string;
    columnName: string;
    dataType: string;
    dataLength: number;
    dataPrecision: number;
    dataScale: number;
    nullable: string;
   
    constructor(obj?: any) {
      this.owner = obj && obj.owner || "";
      this.tableName = obj && obj.tableName || "";
      this.columnName = obj && obj.columnName || "";
      this.dataType = obj && obj.dataType || "";
      this.dataLength = obj && obj.dataLength || null;
      this.dataPrecision = obj && obj.dataPrecision || null;
      this.dataScale = obj && obj.dataScale || null;
      this.nullable = obj && obj.nullable || "";
     }
  }