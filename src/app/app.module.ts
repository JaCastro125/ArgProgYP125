import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*componentes agregados*/
import { NavbarComponent } from './component/navbar/navbar.component';
import { AboutComponent } from './component/about/about.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { HabilidadesComponent } from './component/habilidades/habilidades.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { FooterComponent } from './component/footer/footer.component';
import { RedesComponent } from './component/redes/redes.component';
import { IndexComponent } from './component/index/index.component';
import { Error404Component } from './component/error404/error404.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { LogOutComponent } from './component/log-out/log-out.component';
/*componentes modales*/
import { LoginComponent } from './modals/login/login.component'; 
import { ButtonEliminarComponent } from './modals/button-eliminar/button-eliminar.component';
import { ImagenPerfilComponent } from './modals/imagen-perfil/imagen-perfil.component';
import { SobreMiComponent } from './modals/sobre-mi/sobre-mi.component';
import { MisDatosComponent } from './modals/mis-datos/mis-datos.component';
import { EducationComponent } from './modals/education/education.component';
import { ExperienceComponent } from './modals/experience/experience.component';
import { SkillsComponent } from './modals/skills/skills.component';
import { ProyectComponent } from './modals/proyect/proyect.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    /*componentes*/
    NavbarComponent,
    AboutComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    RedesComponent,
    IndexComponent,
    Error404Component,
    LogInComponent,
    LogOutComponent,
    /*modals*/
    LoginComponent,
    ButtonEliminarComponent,
    ImagenPerfilComponent,
    SobreMiComponent,
    MisDatosComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ProyectComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

  