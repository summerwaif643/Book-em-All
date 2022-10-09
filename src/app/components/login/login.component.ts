import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private httpClient: HttpClient,
              private renderer: Renderer2) { }

    error: any;

  loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });

    login(): void { 
        this.httpClient.get('http://localhost:3000/loginGet').subscribe(res => {

        });
    }

  ngOnInit(): void {
  }

  onSubmit(): void { 

    // Holds username and password on form submission
    console.log(this.loginForm.value); 
    let form = this.loginForm.value;
    // Send post request to nodejs 

    this.httpClient.post('http://localhost:3000/login', form).subscribe(res => {
        console.log(res);
        //this.login();
    },
    err => {
        if (err.status === 500){
            console.log('Username not found');
            this.error = '<div>Username non trovato</div>';

        }

        if (err.status === 200){
            console.log('User correctly logged in ');
            // Handle log in in here

        }
    });
    


    this.loginForm.reset();
  }
}
