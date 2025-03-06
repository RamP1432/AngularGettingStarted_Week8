import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  message: string = 'Welcome to BridgeLabz';
  logoUrl: string = 'src/assets/Bridgelabz.png'; // ✅ Ensure the image is inside src/assets/
  url = "https://www.bridgelabz.com";
  
  userName: string = ''; 

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
  }

  onClick($event: any) {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
}
