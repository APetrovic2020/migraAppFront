import { Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ColsVista} from '../../../../../classes/colsVista';

@Component({
  selector: 'app-mostrar-vistas',
  templateUrl: './mostrar-vistas.component.html',
  styleUrls: ['./mostrar-vistas.component.sass'],
  template: 'passed in {{ data.lstCols }}'
})
export class MostrarVistasComponent implements OnInit {
  buscarColsU: ColsVista[];
  buscarColsO: ColsVista[];
  nombreTabU: String;
  nombreTabO: String;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
      this.buscarColsU = this.data.lstCols;
      this.buscarColsO = this.data.lstColsO;
      this.nombreTabU = this.data.nombreTablaU;
      this.nombreTabO = this.data.nombreTablaO;
      /*console.log('ngOnInit buscarColsU = ' + this.buscarColsU);
      console.log('ngOnInit buscarColsO = ' + this.buscarColsO);
      console.log('ngOnInit nombreTabU = ' + this.nombreTabU);
      console.log('ngOnInit nombreTabO = ' + this.nombreTabO);*/
  }

}
