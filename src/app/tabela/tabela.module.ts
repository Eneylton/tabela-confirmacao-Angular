import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaGridComponent } from './tabela-grid/tabela-grid.component';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/components/button/button';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {ToolbarModule} from 'primeng/components/toolbar/toolbar';


@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    ButtonModule,
    ToolbarModule
  ],
  declarations: [TabelaGridComponent, ToolbarComponent],
  exports :[TabelaGridComponent]
})
export class TabelaModule { }
