import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinIdPage } from './coin-id.page';

const routes: Routes = [
  {
    path: '',
    component: CoinIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinIdPageRoutingModule {}
