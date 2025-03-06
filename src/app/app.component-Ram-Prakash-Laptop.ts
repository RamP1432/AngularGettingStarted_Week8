import { Component, OnInit } from '@angular/core';
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

export class AppComponent implements OnInit {
  title = 'HelloWorld';
  imgUrl = "https://dt9xom8irs6kr.cloudfront.net/u255961/psjza5xWPRWwyyjkiVi91654531115.jpeg";
  url = "https://www.bridgelabz.com";
  userName: string = "";
  nameError: string = "";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz";
  }

  onClick(event: Event): void {
    console.log("Save button is clicked!", event);
    window.open(this.url, "_blank");
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.userName = input.value;
    const nameRegex = /^[A-Z]{1}[a-zA-Z\s]{2,}$/;
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect!";
  }
}