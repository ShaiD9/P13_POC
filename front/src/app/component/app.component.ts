import {Component} from '@angular/core';
import {ChatService, Message} from "../../service/chat.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  template: `
    <p-toast></p-toast>
    <h1>Support Client : Your Car Your Way</h1>
    <div style="padding: 1em">
      <div class="grid">
        <span class="p-float-label">
            <input type="text" id="username" pInputText [(ngModel)]="username"/>
            <label for="username">Nom d'utilisateur</label>
        </span>
        <p-button icon="pi pi-sign-in" class="m-1"
                  [disabled]="connected || !this.username"
                  (onClick)="connect()"
        ></p-button>
        <p-button icon="pi pi-sign-out" class="m-1"
                  [disabled]="!connected"
                  (onClick)="disconnect()"
        ></p-button>
      </div>
      <div style="padding-top: 1em" *ngIf="connected">
        <div class="grid">
          <span class="p-float-label">
            <input type="text" id="text" pInputText [(ngModel)]="text"/>
            <label for="text">Message</label>
        </span>
          <p-button icon="pi pi-send" class="m-1"
                    [disabled]="!text"
                    (onClick)="sendMessage()"
          ></p-button>
        </div>
      </div>
    </div>

    <div class="grid">
      <!-- Montre les messages envoyé -->
      <div class="col">
        <table class="table table-striped">
          <thead>
          <tr>
            <th><h3>Message envoyé :</h3></th>
          </tr>
          </thead>
          <tbody *ngFor="let message of sent">
          <tr>
            <td>
              <p>{{message.text}}</p>
              <small>{{message.time | date: 'dd/MM/yyyy HH:mm:ss'}}</small>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <!-- Montre les messages recu -->
      <div class="col">
        <table class="table table-striped">
          <thead>
          <tr>
            <th><h3>Message reçu :</h3></th>
          </tr>
          </thead>
          <tbody *ngFor="let message of received">
          <tr>
            <td>
              <i>{{message.name}}</i><br>
              <p>{{message.text}}</p>
              <small>{{message.time | date: 'dd/MM/yyyy HH:mm:ss'}}</small>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <!-- Montre la conversation -->
       <div class="col">
        <table class="table table-striped">
          <thead>
          <tr>
            <th><h1>Conversation :</h1></th>
          </tr>
          </thead>
          <tbody *ngFor="let message of conversation">
          <tr>
            <td>
              <i style="font-size: 2em;">{{message.name}}</i><br>
              <p style="font-size: 1.5em;">{{message.text}}</p>
              <small style="font-size: 0.75em;">{{message.time | date: 'dd/MM/yyyy HH:mm:ss'}}</small>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class AppComponent {

  username: string;
  text: string;
  connected: boolean;

  subscription: Subscription;

  received: Message[] = [];
  sent: Message[] = [];
  conversation: Message[] = [];

  constructor(private chatService: ChatService) {
  }

  connect() {
    this.connected = true;
    this.chatService.connect();
    this.subscription = this.chatService.messages.subscribe((msg) => {
      this.received.push(msg);
      this.updateConversation();
    });
  }

  disconnect() {
    this.received = [];
    this.sent = [];
    this.conversation = [];
    this.text = '';
    this.chatService.disconnect();
    this.subscription.unsubscribe();
    this.connected = false;
  }

  sendMessage() {
    const message: Message = {
      name: this.username,
      text: this.text,
      time: new Date()
    };
    this.sent.push(message);
    this.text = '';
    this.chatService.messages.next(message);
    this.text = '';
    this.updateConversation();
  }

  updateConversation() {
    this.conversation = [...this.sent, ...this.received]
      .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
  }
}
