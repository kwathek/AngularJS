import {User} from '../Models/User.model';
import {Subject} from 'rxjs/Subject';

export  class UserService {
   private  users: User[] = [
     {
       firstName: 'James',
       lastName: 'Smith',
       email: 'james@smith.com',
       drinkPreference: 'coca',
       hobbies: [
          'coder',
          'la dégustation de café '
       ]
     }
   ];
   userSubject = new Subject<User[]>();

   emitUser () {
     this.userSubject.next(this.users.slice());
   }
   addUser(user: User) {
     this.users.push(user);
     this.emitUser();
   }

}
