import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UsernameValidationService {
  constructor() { }

  usernameValidator() {
    return (applicantForm: FormGroup) => {
      const user = applicantForm.get('firstName')?.value;

      if (user === 'admin' ) {
        // Set an error on the 'firstName' control
        applicantForm.get('firstName')?.setErrors({ forbiddenUsername: true });
      }
    };
  }
}
