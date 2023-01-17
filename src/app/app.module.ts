import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AsertividadComponent } from './pages/instrucciones/asertividad/asertividad.component';
import { SectionComponent } from './components/section/section.component';
import { InventarioComponent } from './pages/instrucciones/inventario/inventario.component';
import { AutoestimaComponent } from './pages/instrucciones/autoestima/autoestima.component';
import { InteligenciaComponent } from './pages/instrucciones/inteligencia/inteligencia.component';
import { ChasideComponent } from './pages/instrucciones/chaside/chaside.component';
import { CuestionarioinventarioComponent } from './pages/cuestionario/cuestionarioinventario/cuestionarioinventario.component';
import { CuestionarioasertividadComponent } from './pages/cuestionario/cuestionarioasertividad/cuestionarioasertividad.component';
import { CuestionarioautoestimaComponent } from './pages/cuestionario/cuestionarioautoestima/cuestionarioautoestima.component';
import { CuestionariochasideComponent } from './pages/cuestionario/cuestionariochaside/cuestionariochaside.component';
import { CuestionariointeligenciaComponent } from './pages/cuestionario/cuestionariointeligencia/cuestionariointeligencia.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AsertividadComponent,
    SectionComponent,
    InventarioComponent,
    AutoestimaComponent,
    InteligenciaComponent,
    ChasideComponent,
    CuestionarioinventarioComponent,
    CuestionarioasertividadComponent,
    CuestionarioautoestimaComponent,
    CuestionariochasideComponent,
    CuestionariointeligenciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
