import {reject} from 'q';

export class  AuthService {

  isAuth = false;


  constructor(){}


  signIn(){
    return new Promise(
      (resolve, reject) => {
            setTimeout(
              () => {
                this.isAuth=true;
                resolve(true);
              },2000
            );
      }
    );
  }

  SignOut() {
    this.isAuth = false ;
  }

}
