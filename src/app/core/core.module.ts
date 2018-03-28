import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationService } from 'primeng/components/common/api';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ToastyModule } from 'ng2-toasty';
import { TabelaService } from '../tabela/tabela.service';

@NgModule({
  imports: [
    CommonModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule
  ],
  declarations: [],
  exports: [

    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [TabelaService,
    ConfirmationService
   ]
})
export class CoreModule { }
