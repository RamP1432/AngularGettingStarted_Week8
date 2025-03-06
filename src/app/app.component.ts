import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HelloWorld';
  message: string = 'Welcome to BridgeLabz';
  logoUrl: string = 'https://www.bridgelabz.com/assets/images/ET-CS-Coding-logo%20.png'; 
  url = "https://www.bridgelabz.com";

 ngOnInit(): void {
   this.title = "Hello from BridgeLabz.";
   }
onClick($event: any) {
  console.log("Save button is clicked!", $event);
  window.open(this.url, "_blank");
    }  
}

