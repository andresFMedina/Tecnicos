import { IonicRatingModule } from 'ionic4-rating';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TecnicDetailPage } from './tecnic-detail.page';


const routes: Routes = [
  {
    path: '',
    component: TecnicDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicRatingModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TecnicDetailPage]
})
export class TecnicDetailPageModule {}
