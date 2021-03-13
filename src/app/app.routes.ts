import { Routes, RouterModule } from "@angular/router";
import { BarraComponent } from "./components/barra/barra.component";
import { DonaComponent } from "./components/dona/dona.component";
import { LineaComponent } from "./components/linea/linea.component";
import { RadarComponent } from "./components/radar/radar.component";

const RUTAS:Routes = [
    {path:'barra', component:BarraComponent},
    {path:'dona', component:DonaComponent},
    {path:'linea', component:LineaComponent},
    {path:'radar', component:RadarComponent},
    {path:'*', pathMatch:'full', redirectTo:'linea'}
];

export const APP_ROUTES = RouterModule.forRoot( RUTAS );