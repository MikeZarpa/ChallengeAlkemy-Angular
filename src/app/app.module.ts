import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPlatosComponent } from './components/lista-platos/lista-platos.component';
import { PlatoItemComponent } from './components/listaPlatos/plato-item/plato-item.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuFooterDetailsComponent } from './components/menu/menu-footer-details/menu-footer-details.component';
import { BuscadorPlatosComponent } from './components/buscador-platos/buscador-platos.component';

import {ReactiveFormsModule} from '@angular/forms';
import { LoginFormComponent } from './components/login/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPlatosComponent,
    PlatoItemComponent,
    LoginComponent,
    MenuComponent,
    MenuFooterDetailsComponent,
    BuscadorPlatosComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
