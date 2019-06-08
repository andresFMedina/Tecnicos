import { TecnicService } from './../services/tecnic.service';
import { Technical } from './../interfaces/tecnico';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterComponent } from '../components/filter/filter.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {  
  technicals: Technical[];

  constructor(
    public modalControler: ModalController,
    private tecnicService: TecnicService
  ) {
    this.tecnicService.getTechnicals().valueChanges().subscribe(
      (data: Technical[]) => {
        this.technicals = data;
        console.log(data);
      }
    );
  }

  async obtenerFiltros() {
    const modal = await this.modalControler.create({
      component: FilterComponent
    });
    await modal.present();
  }

}
