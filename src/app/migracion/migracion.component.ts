import { Component, OnInit } from '@angular/core';
import { FadeIn } from '../animaciones/fade-in';

@Component({
  selector: 'app-migracion',
  templateUrl: './migracion.component.html',
  styleUrls: ['./migracion.component.sass'],
  animations:FadeIn
})
export class MigracionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
