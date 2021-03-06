import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {error} from 'selenium-webdriver';

@Injectable()
export class AuthService {

  constructor() { }

  createNewUser(email: string ,  password: string){
    return new Promise(
      (resolve, reject) => {
              firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password).then(
                () => {
                  resolve();
                },
                (error) => {
                  reject(error);
                }
              );
      }
    );
  }

  signInUser(email: string , password: string){
    return new  Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
              resolve();
          },
          (erreur) => {
             reject(erreur);
          }
        );
      }
    );
  }

  signOutUser() {
     firebase.auth().signOut();
  }

}
