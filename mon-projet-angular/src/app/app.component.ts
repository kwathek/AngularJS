import {Component, OnDestroy, OnInit} from '@angular/core';
import {reject} from 'q';
import DateTimeFormat = Intl.DateTimeFormat;
import {AppareilService} from './services/appareil.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit , OnDestroy{

  secondes: number;
  counterSubscription: Subscription ;
   constructor() {}

    ngOnInit(){
      const  counter = Observable.interval(1000);
      this.counterSubscription = counter.subscribe(
        (value: number) => {
          this.secondes = value ;
        }
      );

    }

    ngOnDestroy(){
      this.counterSubscription.unsubscribe();
    }


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





}
