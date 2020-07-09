export class Cols {
    codCompetencia: number;
    crr_ttc: number;
    crr_tth: number;
    ownerU: string;
    tablaU: string;
    columnaU: string;
    flgPkU: number;
    tipoU: string;
    largoU: number;
    precisionU: number;
    escalaU: number;
    forma: string;
    ownerO: string;
    tablaO: string;
    columnaO: string;
    flgPkO: number;
    tipoO: string;
    largoO: number;
    precisionO: number;
    escalaO: number;
    funcion: string;
    constanteNum: number;
    constanteChar: string;
    fechaCreacion: string;
    ownerMig: string;
    identity: number;
  
    constructor(obj?: any) {
      this.codCompetencia = obj && obj.codCompetencia || null;
      this.crr_ttc = obj && obj.crr_ttc || null;
      this.crr_tth = obj && obj.crr_tth || null;
      this.ownerU = obj && obj.ownerU || "";
      this.tablaU = obj && obj.tablaU || "";
      this.columnaU = obj && obj.columnaU || "";
      this.flgPkU = obj && obj.flgPkU || null;
      this.tipoU = obj && obj.tipoU || "";
      this.largoU = obj && obj.largoU || null;
      this.precisionU = obj && obj.precisionU || null;
      this.escalaU = obj && obj.escalaU || null;
      this.forma = obj && obj.forma || "";
      this.ownerO = obj && obj.ownerO || "";
      this.tablaO = obj && obj.tablaO || "";
      this.columnaO = obj && obj.columnaO || "";
      this.flgPkO = obj && obj.flgPkO || null;
      this.tipoO = obj && obj.tipoO || "";
      this.largoO = obj && obj.largoO || null;
      this.precisionO = obj && obj.precisionO || null;
      this.escalaO = obj && obj.escalaO || null;
      this.funcion = obj && obj.funcion || "";
      this.constanteNum = obj && obj.constanteNum || null;
      this.constanteChar = obj && obj.constanteChar || "";
      this.fechaCreacion = obj && obj.fechaCreacion || "";
      this.ownerMig = obj && obj.ownerMig || "";
      this.identity = obj && obj.identity || null;
     }
  }