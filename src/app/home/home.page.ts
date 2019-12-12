import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { ChatService } from '../servicios/chat.service';
import { ModalController, ActionSheetController  } from '@ionic/angular';
import { ChatComponent } from '../componentes/chat/chat.component';
import { Chat } from '../models/chat';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public chatRooms: any = [];

  constructor(private authSer: AuthService,
              private chatSer: ChatService,
              private modal: ModalController,
              private actionSheetController: ActionSheetController) {}

  onLogout() {
    this.authSer.logout();
  }

  ngOnInit(): void {
    this.chatSer.getChatRooms().subscribe(chats => this.chatRooms = chats);

  }

  openChat(chats: Chat) {
    this.modal.create({
      component: ChatComponent,
      componentProps : {
        chat: chats
      }
    }).then( (modal) => modal.present());
  }

   async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Desconectarse',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
          this.onLogout();
        }
      }]
    });
    await actionSheet.present();
  }

}
