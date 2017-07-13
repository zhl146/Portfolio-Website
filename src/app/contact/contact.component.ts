import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpWrapper } from '../shared/http-wrapper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm;

  constructor( private fb: FormBuilder,
               private http: HttpWrapper,
               private router: Router) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
        message: this.fb.control('', Validators.required),
        senderEmail: this.fb.control('', Validators.email),
        sender: this.fb.control('', Validators.required)
      }
    );
  }

  onSubmit() {
    this.contactForm.get('message').markAsTouched();
    this.contactForm.get('sender').markAsTouched();
    this.contactForm.get('senderEmail').markAsTouched();
    if (this.contactForm.valid) {
      const emailJson = {
        sender: this.contactForm.get('sender').value,
        senderEmail: this.contactForm.get('senderEmail').value,
        message: this.contactForm.get('message').value,
      };

      const data = JSON.stringify(emailJson);
      this.http.sendEmail(data)
        .subscribe()
      this.router.navigate(['thanks']);
    }
  }

  isValid(inputToCheck) {
    const input = this.contactForm.get(inputToCheck);
    if ( !input.touched ) {
      return true;
    } else {
      return input.valid;
    }
  }

  validClass(inputToCheck) {
    return this.isValid(inputToCheck) ? 'valid' : 'invalid';
  }

  messageError() {
    if ( this.isValid('message') ) {
      return;
    }
    return 'Please type a message.';
  }

  senderError() {
    if ( this.isValid('sender') ) {
      return;
    }
    return 'Please input your name.';
  }

  emailError() {
    if ( this.isValid('senderEmail') ) {
      return;
    }
    return 'Please type your e-mail.';
  }
}
