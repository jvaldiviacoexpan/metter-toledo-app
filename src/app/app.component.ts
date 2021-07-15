import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Bienvenido', url: '/folder/Bienvenido', icon: 'accessibility' },
    { title: 'Tara 1 (No Disponible)', url: '/folder/Tara1', icon: 'stop' },
    { title: 'Tara 2', url: '/folder/Tara2', icon: 'stop' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
