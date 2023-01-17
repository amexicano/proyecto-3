import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuestionarioasertividadComponent } from './pages/cuestionario/cuestionarioasertividad/cuestionarioasertividad.component';
import { CuestionarioautoestimaComponent } from './pages/cuestionario/cuestionarioautoestima/cuestionarioautoestima.component';
import { CuestionariochasideComponent } from './pages/cuestionario/cuestionariochaside/cuestionariochaside.component';
import { CuestionariointeligenciaComponent } from './pages/cuestionario/cuestionariointeligencia/cuestionariointeligencia.component';
import { CuestionarioinventarioComponent } from './pages/cuestionario/cuestionarioinventario/cuestionarioinventario.component';
import { HomeComponent } from './pages/home/home.component';
import { AsertividadComponent } from './pages/instrucciones/asertividad/asertividad.component';
import { AutoestimaComponent } from './pages/instrucciones/autoestima/autoestima.component';
import { ChasideComponent } from './pages/instrucciones/chaside/chaside.component';
import { InteligenciaComponent } from './pages/instrucciones/inteligencia/inteligencia.component';
import { InventarioComponent } from './pages/instrucciones/inventario/inventario.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'instrucciones', children: [
      { path: 'asertividad', component: AsertividadComponent },
      { path: 'inteligencia', component: InteligenciaComponent },
      { path: 'autoestima', component: AutoestimaComponent },
      { path: 'chaside', component: ChasideComponent },
      { path: 'inventario', component: InventarioComponent },
    ]
  },
  {
    path: 'cuestionario', children: [
      { path: 'asertividad', component: CuestionarioasertividadComponent },
      { path: 'inteligencia', component: CuestionariointeligenciaComponent },
      { path: 'autoestima', component: CuestionarioautoestimaComponent },
      { path: 'chaside', component: CuestionariochasideComponent },
      { path: 'inventario', component: CuestionarioinventarioComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
