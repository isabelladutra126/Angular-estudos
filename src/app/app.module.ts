import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { MudarNumeroComponent } from './components/mudar-numero/mudar-numero.component';
import { ListRenderComponent } from './components/list-render/list-render.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DirectiveComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterComponent,
    MudarNumeroComponent,
    ListRenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
