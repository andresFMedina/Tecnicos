import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TecnicService {

  constructor(private angularFireDatabase: AngularFireDatabase) { }

  getTechnicals(){
    return this.angularFireDatabase.list('/tecnicos');
  }

  getTechnicalById(id){
    return this.angularFireDatabase.object('/tecnicos/' + id);
  }

  setRating(rating, id){
    return this.angularFireDatabase.object('/tecnicos/' + id + '/rating').set(rating);
  }
}
