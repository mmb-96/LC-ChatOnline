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

  // Variable para guardar los chat de la base de datos.
  public chatRooms: any = [];

  constructor(private authSer: AuthService,
              private chatSer: ChatService,
              private modal: ModalController,
              private actionSheetController: ActionSheetController) {}

  /*
  Metodo que llama al servicio para desloguear al usuario.
  */
  onLogout() {
    this.authSer.logout();
  }

  // Inicializa la vista con todos los chat cargados.
  ngOnInit(): void {
    this.chatSer.getChatRooms().subscribe(chats => this.chatRooms = chats);

  }

  /*
  Metodo para abrir el chat seleccionado, este chat se abre con modal, tipo popup.
  */
  openChat(chats: Chat) {
    this.modal.create({
      component: ChatComponent,
      componentProps : {
        chat: chats
      }
    }).then( (modal) => modal.present());
  }

  // Se utiliza para el boton de los chat de la izquierda que nos permite desconectarnos de la app.
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
