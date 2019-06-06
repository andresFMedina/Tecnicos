import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnic-detail',
  templateUrl: './tecnic-detail.page.html',
  styleUrls: ['./tecnic-detail.page.scss'],
})
export class TecnicDetailPage implements OnInit {
  rate = 4;
  constructor() { }

  ngOnInit() {
  }

  onModelChange(event){
    this.rate = event;
  }

}
