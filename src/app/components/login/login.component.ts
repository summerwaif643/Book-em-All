import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private httpClient: HttpClient,
              private renderer: Renderer2,
              private route: Router) { }

    error: any;

  loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });

  ngOnInit(): void {
  }

  onSubmit(): void { 

    // Holds username and password on form submission
    let form = this.loginForm.value;
    let username: any;
    let id: any;
    // Send post request to nodejs 

    this.httpClient.post('http://localhost:3000/login', form).subscribe(res => {
        console.log(res);
            //this.login();
        },
        err => {
            if (err.status === 500){
                // Error code to handle here
                console.log('Username not found');
                this.error = '<div>Username non trovato</div>';

            }

            if (err.status === 200){
                console.log('User correctly logged in ');
                // Handle log in in here
                // get id 
                this.httpClient.get('http://localhost:3000/getId/' + form.username).subscribe(res => {
                    id = res;
                    id = id.id;
                    
                    // id now holds effective id 
                    this.route.navigate(['/' + id]);
                }, err => {
                    console.log(err.error);
                })
                // send to ?id page as in floki 
                //this.route.navigate(['/' + "|"]);
            }
        });
        


    this.loginForm.reset();
  }
}
