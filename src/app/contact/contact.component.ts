import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm;

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      content: this.fb.control(''),
      senderEmail: this.fb.control(''),
      sender: this.fb.control('')
      }
    )
  }

}
