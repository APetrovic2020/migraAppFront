export class Head {
    codCompetencia: number;
    crr_tth: number;
    bddU: string;
    ownerU: string;
    tablaU: string;
    bddO: string;
    ownerO: string;
    tablaO: string;
    fechaCreacion: string;
    flgActivo: number;
    flgGenPk: number;
    flgGenMtrel: number;
    ownerR: string;
    tablaR: string;
    jerarquia: number;
    tablaPadreO: string;
    dblkUnif: string;
    dblkBase: string;
    condicion: string;
    condicion2: string;
    flgGenCond: number;
    glsDescripcion: string;
    tablaPadreU: string;
    flgSinTabBase: number;
  
    constructor(obj?: any) {
      this.codCompetencia = obj && obj.codCompetencia || null;
      this.crr_tth = obj && obj.crr_tth || null;
      this.bddU = obj && obj.bddU || "";
      this.ownerU = obj && obj.ownerU || "";
      this.tablaU = obj && obj.tablaU || "";
      this.bddO = obj && obj.bddO || "";
      this.ownerO = obj && obj.ownerO || "";
      this.tablaO = obj && obj.tablaO || "";
      this.fechaCreacion = obj && obj.fechaCreacion || "";
      this.flgActivo = obj && obj.flgActivo || null;
      this.flgGenPk = obj && obj.flgGenPk || null;
      this.flgGenMtrel = obj && obj.flgGenMtrel || null;
      this.ownerR = obj && obj.ownerR || "";
      this.tablaR = obj && obj.tablaR || "";
      this.jerarquia = obj && obj.jerarquia || null;
      this.tablaPadreO = obj && obj.tablaPadreO || "";
      this.dblkUnif = obj && obj.dblkUnif || "";
      this.dblkBase = obj && obj.dblkBase || "";
      this.condicion = obj && obj.condicion || "";
      this.condicion2 = obj && obj.condicion2 || "";
      this.flgGenCond = obj && obj.flgGenCond || null;
      this.glsDescripcion = obj && obj.glsDescripcion || "";
      this.tablaPadreU = obj && obj.tablaPadreU || "";
      this.flgSinTabBase = obj && obj.flgSinTabBase || null;
     }
  }
  