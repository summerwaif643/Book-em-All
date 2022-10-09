import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private httpClient: HttpClient) { }

  loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });

  ngOnInit(): void {
  }

  onSubmit(): void { 

    // Holds username and password on form submission
    console.log(this.loginForm.value); 
    let form = this.loginForm.value;
    // Send post request to nodejs 
    this.httpClient.post('http://localhost:3000/login', form).subscribe(res => {
      console.log(res);
      
    });


    this.loginForm.reset();
  }
}
