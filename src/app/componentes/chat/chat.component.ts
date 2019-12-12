import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Message } from '../../models/message';
import { ChatService } from '../../servicios/chat.service';
import { AuthService } from '../../servicios/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  public chat: any;
  public room: any;
  public msg: string;
  public userName;

  constructor(private AFAuth: AngularFireAuth,
              private authSer: AuthService,
              private navParams: NavParams,
              private modal: ModalController,
              private chatSer: ChatService) { }

  ngOnInit() {
    this.chatSer.getChatRoom(this.chat.id).subscribe(rooms => this.room = rooms);
    this.chat = this.navParams.get('chat');
    this.getUserID();
  }

  closeChat() {
    this.modal.dismiss();
  }

  sendMenssage() {

    const mensaje: Message = {
      content: this.msg,
      type: 'text',
      date: new Date(),
      userName: this.userName
    };

    this.chatSer.sendMsgToFirebase(mensaje, this.chat.id);
    this.msg = '';
  }

  getUserID() {
    const userID = this.AFAuth.auth.currentUser.uid;
    console.log(this.authSer.getUserName(userID).subscribe(doc => this.userName = doc.data().name));
  }
}
