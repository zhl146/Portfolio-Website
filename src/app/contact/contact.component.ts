import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpWrapper } from '../shared/http-wrapper.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm;

  constructor( private fb: FormBuilder,
               private http: HttpWrapper ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      message: this.fb.control('', Validators.required),
      senderEmail: this.fb.control(''),
      sender: this.fb.control('')
      }
    )
  }

  onSubmit() {
    const emailJson = {
      sender: this.contactForm.get('sender').value,
      senderEmail: this.contactForm.get('senderEmail').value,
      message: this.contactForm.get('message').value,
    };
    this.http.sendEmail(emailJson);
  }

}
