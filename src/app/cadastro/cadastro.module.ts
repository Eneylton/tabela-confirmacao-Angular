import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadAlunoComponent } from './cad-aluno/cad-aluno.component';
import { CardModule } from 'primeng/components/card/card';
import { ToolbarAlunoComponent } from './toolbar-aluno/toolbar-aluno.component';
import { ToolbarModule } from 'primeng/components/toolbar/toolbar';
import { ButtonModule } from 'primeng/components/button/button';
import {InputTextModule} from 'primeng/components//inputtext/inputtext';


@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    ToolbarModule,
    InputTextModule,
    RouterModule

  ],
  declarations: [CadAlunoComponent, ToolbarAlunoComponent],
  exports :[CadAlunoComponent]
})
export class CadastroModule { }
