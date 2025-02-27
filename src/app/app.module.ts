import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './features/cadastro/cadastro.component';
import { LoginComponent } from './features/login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import { CadastroFornecedorComponent } from './features/cadastro-fornecedor/cadastro-fornecedor.component';
import { CadastroClienteComponent } from './features/cadastro-cliente/cadastro-cliente.component';
import {InputNumberModule} from 'primeng/inputnumber';
import { InicioUsuarioComponent } from './features/inicio-usuario/inicio-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    CadastroFornecedorComponent,
    CadastroClienteComponent,
    InicioUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    PasswordModule,
    InputNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
