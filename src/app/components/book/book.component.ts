import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
                private httpClient: HttpClient) { }

    bookForm = this.formBuilder.group({
        username: '',
        password: ''
    });

    onSubmit(): void{
        
    }

  ngOnInit(): void {
  }

}
