import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemplateCritoPageRoutingModule } from './template-crito-routing.module';

import { TemplateCritoPage } from './template-crito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemplateCritoPageRoutingModule
  ],
  declarations: [TemplateCritoPage]
})
export class TemplateCritoPageModule {}
