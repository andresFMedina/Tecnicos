import { TecnicService } from './../../services/tecnic.service';
import { Technical } from './../../interfaces/tecnico';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tecnic-card',
  templateUrl: './tecnic-card.component.html',
  styleUrls: ['./tecnic-card.component.scss'],
})
export class TecnicCardComponent implements OnInit {
  @Input() id: string;
  technical: Technical;

  constructor(
    private technicalService: TecnicService
  ) { }

  ngOnInit() {
    console.log(this.id);
    this.technicalService.getTechnicalById(this.id).valueChanges().subscribe(
      (data: Technical) => {
        console.log(data);
        this.technical = data;
      }, (error) => {
        console.error(error);
      });

  }

}
