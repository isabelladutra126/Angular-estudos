import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username = "isabella";  
  title = 'aula-angular';

  userData = {
    email: "isabella@gmail.com",
    role: "admin",
  }
}
