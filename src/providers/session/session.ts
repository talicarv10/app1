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

  create(user){
    return this.storage.set('user', user);
  }

  get(){
    return this.storage.get('user');
  }

  setPhoto(id,photo){
    return this.storage.set(id,photo);
  }
  getPhoto(id){
  return this.storage.get(String(id));
  }
  remove(){
    this.storage.remove('user');
  }

  setLembrar(login){
    return this.storage.set('login',login)
  }
  
  getLembrar(){
    return this.storage.get('login')
  }
  removerLogin(){
    this.storage.remove('login')
  }
}


