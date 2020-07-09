import { Component, OnInit } from '@angular/core';
import { FadeIn } from 'src/app/animaciones/fade-in';

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-editar-campo',
  templateUrl: './editar-campo.component.html',
  styleUrls: ['./editar-campo.component.sass'],
  animations:FadeIn
})
export class EditarCampoComponent implements OnInit {

  foods: Food[] = [
    {value: '1', viewValue: 'Primary Key'},
    {value: '2', viewValue: 'Función'}
  ];

  formulario_pk = false;
  formulario_fn = false;

  constructor() { }

  ngOnInit(): void {
  }
  cargaForm(value:string){

    this.formulario_pk = false;
    this.formulario_fn = false;

    if (value === '1') {
      this.formulario_pk = true;
      
    }
    if (value === '2') {
      this.formulario_fn = true;
    }
  }

}
