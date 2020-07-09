import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MostrarVistasComponent } from './popUp/mostrar-vistas/mostrar-vistas.component';
import { EditarCampoComponent } from './popUp/editar-campo/editar-campo.component';
import { TablaMapeoService } from 'src/app/servicios/tabla-mapeo.service';
import { GrillaMapeoService } from 'src/app/servicios/grilla-mapeo.service';
import { TablaVistaService } from 'src/app/servicios/tabla-vista.service';
import {Head} from '../../../classes/head';
import {Cols} from '../../../classes/cols';
import {ColsVista} from '../../../classes/colsVista';

interface Food {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-modificacion',
  templateUrl: './modificacion.component.html',
  styleUrls: ['./modificacion.component.sass']
})
export class ModificacionComponent implements OnInit {
  buscarHead: Head[];
  buscarColsU: Cols[];
  buscarColsVistaU: ColsVista[];
  buscarColsVistaO: ColsVista[];
  nombreTabla: '';
  nombreTablaU: '';
  codCompetencia: '8';
  tablaSeleccionada: null;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Tabla 1'},
    {value: 'pizza-1', viewValue: 'Tabla 2'},
    {value: 'tacos-2', viewValue: 'Tabla N'}
  ];

  displayedColumns: string[] = ['PK', 'columnaU', 'tipoU', 'precisionU', 'escalaU', 'forma', 'columnaO', 'tipoO', 'precisionO', 'escalaO', 'funcion', 'accion'];
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource = new MatTableDataSource<Cols>();


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(public dialog: MatDialog, private tablaMapeoService:TablaMapeoService, 
    private grillaMapeoService:GrillaMapeoService,
    private tablaVistaService:TablaVistaService) { }

  ngOnInit(): void {
    this.codCompetencia = '8';
    this.dataSource.paginator = this.paginator;
    this.cargaComboTablasUnificado();
  }

  cargaComboTablasUnificado(){
    this.tablaMapeoService.cargaComboZonas().subscribe(tablas=>{
      console.log(tablas);
      this.buscarHead = tablas;
      console.log(this.buscarHead);
    })
  }

  cargarNombreTabla(tablaSel){
    this.buscarHead['buscarHead'].forEach( (headObj) => {
      if(headObj.crr_tth == tablaSel){
        this.nombreTabla = headObj.tablaO;
        this.nombreTablaU = headObj.tablaU;
        this.tablaSeleccionada = tablaSel;
      }
    });
    this.cargarGrillaTablaUnificado(this.codCompetencia, tablaSel);
  }

  cargarGrillaTablaUnificado(codCompetencia, tablaSel){
    //alert(codCompetencia);
    this.grillaMapeoService.cargaGrillaTabla(codCompetencia, tablaSel).subscribe(grilla=>{
      console.log(grilla);
      this.buscarColsU = grilla;
      this.dataSource = this.buscarColsU['buscarColsU'];
      //console.log(this.dataSource);
      this.tablaVistaService.cargarTablaVista(this.codCompetencia, this.tablaSeleccionada, 0).subscribe(grilla=>{
        console.log('grillaU = ' + grilla);
        this.buscarColsVistaU = grilla['buscarColsVista'];
        console.log('this.buscarColsVistaU  = ' + this.buscarColsVistaU );
      })
  
      this.tablaVistaService.cargarTablaVista(this.codCompetencia, this.tablaSeleccionada, 1).subscribe(grilla=>{
        console.log('grillaO = ' + grilla);
        this.buscarColsVistaO = grilla['buscarColsVista'];
        console.log('this.buscarColsVistaO  = ' + this.buscarColsVistaO );
      })
    })
  }

  verComparacionColumnas() {
    const dialogRef = this.dialog.open(MostrarVistasComponent, {
      data: { lstCols: this.buscarColsVistaU,
              lstColsO: this.buscarColsVistaO,
              nombreTablaU: this.nombreTablaU,
              nombreTablaO: this.nombreTabla},
      width: '90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  modificarCampo(){
    const dialogRef = this.dialog.open(EditarCampoComponent, {
      width: '95%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
