import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';

//FlexLayout
import { FlexLayoutModule } from '@angular/flex-layout';


import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToolbarGeneralComponent } from './menu/toolbar-general/toolbar-general.component';
import { MigracionComponent } from './migracion/migracion.component';
import { HomeComponent } from './home/home.component';
import { ModificacionComponent } from './migracion/tablaMapeo/modificacion/modificacion.component';
import { NuevoMapeoComponent } from './migracion/tablaMapeo/nuevo-mapeo/nuevo-mapeo.component';
import { MostrarVistasComponent } from './migracion/tablaMapeo/modificacion/popUp/mostrar-vistas/mostrar-vistas.component';
import { EditarCampoComponent } from './migracion/tablaMapeo/modificacion/popUp/editar-campo/editar-campo.component';
import {TablaMapeoService} from './servicios/tabla-mapeo.service'
import { MapOperator } from 'rxjs/internal/operators/map';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ToolbarGeneralComponent,
    MigracionComponent,
    HomeComponent,
    ModificacionComponent,
    NuevoMapeoComponent,
    MostrarVistasComponent,
    EditarCampoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //ServiceWorkerModule.register('ngsw-worker.js', { enabled: false/*environment.production*/ }),
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatTooltipModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDialogModule,
    MatChipsModule,
    MatCheckboxModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [TablaMapeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
