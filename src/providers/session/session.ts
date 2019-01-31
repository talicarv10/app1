import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
/*
  Generated class for the Session provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Session {

  constructor(public storage:Storage) {
   
  }

  set(key,dado){
    return this.storage.set(key, dado);
  }

  get(key){
    return this.storage.get(String(key));
  }

  remove(key){
    this.storage.remove(key);
  }


}


