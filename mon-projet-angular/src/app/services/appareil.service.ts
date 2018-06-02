import { Subject } from 'rxjs/Subject';
import { HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export  class  AppareilService {


  appareilsSubject = new Subject<any[]>();

  private  appareils = [
    {
      id:1,
      name: 'Machine à lavé',
      status: 'éteint'
    },
    {
      id:2,
      name: 'télévision',
      status: 'allumé'
    },
    {
      id:3,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  constructor(private httpClient: HttpClient){}

  emitAppareilSubject() {

    this.appareilsSubject.next(this.appareils.slice());

  }

  getAppareilById(id: number){
    const  appareil = this.appareils.find(
      (appareilObject) => {
         return appareilObject.id === id ;
      }
    );
    return appareil;

  }

  SwitchOnAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  SwitchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  SwitchOnOne(index: number){
    this.appareils[index].status = 'allumé';
  }
  SwitchOffOne(index: number){
    this.appareils[index].status = 'éteint';
  }

  addAppareil(name: string, status: string){
        const appareilObject = {
          id:0,
          name: '',
          status: ' '
        };
        appareilObject.name=name;
        appareilObject.status=status;
        appareilObject.id=this.appareils[(this.appareils.length - 1)].id + 1 ;

        this.appareils.push(appareilObject);
        this.emitAppareilSubject();
  }

  saveAppareilToServer(){
    this.httpClient.put('https://http-client-demo-3cb00.firebaseio.com/appareils.json',this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur de sauvgarde'+error);
        }
      );
  }

  getAppareilFromServer(){
    this.httpClient.get<any[]>('https://http-client-demo-3cb00.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.appareils=response;
          this.emitAppareilSubject();
        },
        (erreur) => {
          console.log('Erreur de chargement '+ erreur);
        }
      );
  }

}
