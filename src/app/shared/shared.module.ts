import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModuleModule } from './materialModule/materialModule.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule
  ],
  exports: [
    MaterialModuleModule
  ],
  declarations: []
})
export class SharedModule { }
