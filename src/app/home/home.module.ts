import { FilterComponent } from './../components/filter/filter.component';
import { TecnicCardComponent } from './../components/tecnic-card/tecnic-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    TecnicCardComponent,
    FilterComponent
  ],
  entryComponents: [
    FilterComponent
  ]
})
export class HomePageModule {}
