import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {

  MatTabsModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule

} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialModuleModule { }
