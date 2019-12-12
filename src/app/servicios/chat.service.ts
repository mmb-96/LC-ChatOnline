import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Message } from '../models/message';
import { firestore } from 'firebase/app';
import { Chat } from '../models/chat';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor( private db: AngularFirestore ) { }

  getChatRooms() {
    return this.db.collection('chatRooms').snapshotChanges().pipe(map(rooms => {
      return rooms.map(room => {
        const data = room.payload.doc.data() as Chat;
        data.id = room.payload.doc.id;
        return data;
      });
    }));
  }

  getChatRoom(chatID: string): Observable<any> {
    return this.db.collection('chatRooms').doc(chatID).valueChanges();
  }

  sendMsgToFirebase(message: Message, chatID: string ) {
    this.db.collection('chatRooms').doc(chatID).update({
      messages: firestore.FieldValue.arrayUnion(message),
    });
  }
}
