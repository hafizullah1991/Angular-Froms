import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl,   } from '@angular/forms';
@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit {
public iceCreamForm = new FormGroup({
  name: new FormControl(''), 
  email: new FormControl(''), 
  phone: new FormControl(''),
  address: new FormControl(''),
  message: new FormControl('')
})
ngOnInit(): void {
  
}
public feachData(){
  console.log(this.iceCreamForm.value)
}
}
