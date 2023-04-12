import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//IMPORTANDO RUTAS
import { APP_ROUTING } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/componentes/home/home.component';
import { HeroesComponent } from './components/componentes/heroes/heroes.component';
import { NosotrosComponent } from './components/componentes/nosotros/nosotros.component';
import { HistoriaComponent } from './components/componentes/historia/historia.component';
import { FooterComponent } from './components/componentes/footer/footer.component';
import { NabvarComponent } from './components/componentes/nabvar/nabvar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesComponent,
    NosotrosComponent,
    HistoriaComponent,
    FooterComponent,
    NabvarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
