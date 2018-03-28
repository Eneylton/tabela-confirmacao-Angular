import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


import { ToastyModule } from 'ng2-toasty';


import { CadastroModule } from './cadastro/cadastro.module';
import { CoreModule } from './core/core.module';
import { TabelaModule } from './tabela/tabela.module';
import { AppComponent } from './app.component';
import { TabelaGridComponent } from './tabela/tabela-grid/tabela-grid.component';
import { CadAlunoComponent } from './cadastro/cad-aluno/cad-aluno.component';

const routes: Routes = [
  { path: 'alunos', component: TabelaGridComponent },
  { path: 'alunos/:codigo', component: CadAlunoComponent },
  { path: 'alunos/novo', component: CadAlunoComponent }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    TabelaModule,
    HttpModule,
    CoreModule,
    CadastroModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
