import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFAuth: AngularFireAuth, private router: Router, private db: AngularFirestore) { }

  login(email: string, password: string) {
    return new Promise((resolve, rejected) => {
      this.AFAuth.auth.signInWithEmailAndPassword(email, password).then(user => resolve(user)).catch(err => rejected(err));
    });
  }

  logout() {
    this.AFAuth.auth.signOut().then( auth => this.router.navigate(['/login']));
  }

  register(email: string, password: string, nameV: string) {
    return new Promise((resolve, reject) => {
      this.AFAuth.auth.createUserWithEmailAndPassword(email, password).then( res => {
        const consUID = res.user.uid;
        this.db.collection('users').doc(consUID).set({
          name: nameV,
          uid: consUID
        });
        resolve(res);
      }).catch( err => reject(err));
    });
  }

  getUserName(userID: string): Observable<any> {
    return this.db.collection('users').doc(userID).get();
  }
}
