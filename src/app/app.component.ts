import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactsComponent } from "./components/contacts/contacts.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'contact-form';
}
