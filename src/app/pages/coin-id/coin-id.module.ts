import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinIdPageRoutingModule } from './coin-id-routing.module';

import { CoinIdPage } from './coin-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoinIdPageRoutingModule
  ],
  declarations: [CoinIdPage]
})
export class CoinIdPageModule {}
