import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateCritoPage } from './template-crito.page';

const routes: Routes = [
  {
    path: '',
    component: TemplateCritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateCritoPageRoutingModule {}
