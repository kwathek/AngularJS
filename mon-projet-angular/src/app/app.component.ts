import { Component } from '@angular/core';
import {reject} from 'q';
import DateTimeFormat = Intl.DateTimeFormat;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isAuth = false ;

    lastUpdate = new Promise(
      (resolve,reject) => {
        const date = new Date();
        setTimeout(
          () => {
            resolve(date);
          },2000
        );
      }
    )

    appareils = [
    {
      name: 'Machine à lavé',
      status: 'éteint'
    },
    {
      name: 'télévision',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
        status: 'éteint'
    }
    ];
  date = new Date() ;

    posts = [
      {
        title: 'Mon premier Post',
        content: 'Le code complet et fonctionnel doit être déposé dans un dépôt Git en ligne que les validateurs doivent pouvoir cloner. Vous fournirez le lien vers le dépôt. Le projet doit être fonctionnel une fois que le projet a été cloné et que la commande npm install a été saisie à la racine.',
        loveIts: 5,
        created_at: this.date
      },
      {
        title: 'Mon deuxième Post',
        content: 'Le code complet et fonctionnel doit être déposé dans un dépôt Git en ligne que les validateurs doivent pouvoir cloner. Vous fournirez le lien vers le dépôt. Le projet doit être fonctionnel une fois que le projet a été cloné et que la commande npm install a été saisie à la racine.',
        loveIts: -2,
        created_at: this.date
      },
      {
        title: 'Encore un Post',
        content: 'Le code complet et fonctionnel doit être déposé dans un dépôt Git en ligne que les validateurs doivent pouvoir cloner. Vous fournirez le lien vers le dépôt. Le projet doit être fonctionnel une fois que le projet a été cloné et que la commande npm install a été saisie à la racine.',
        loveIts: 0,
        created_at: this.date
      },
    ];




    constructor() {

      setTimeout(
        () => {
          this.isAuth = true;
        }, 4000
      );
    }
    onAllumer(){
      console.log("on allume tout ");
    }
}
