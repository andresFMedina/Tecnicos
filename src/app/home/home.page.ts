import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterComponent } from '../components/filter/filter.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public modalControler: ModalController
  ) {}

  async obtenerFiltros() {
    const modal = await this.modalControler.create({
      component: FilterComponent
    });
    await modal.present();
  }

}
