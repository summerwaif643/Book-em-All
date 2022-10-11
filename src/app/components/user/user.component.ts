import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    user: any;
    componentToShow: any;
    switchCase: any; 

  constructor(private route: ActivatedRoute,
                private router: Router,
                private http: HttpClient) { }

    book(): void { 
        this.componentToShow = 1;
    }

    show(): void { 
        this.componentToShow = 2; 
    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id === null){
        console.log('Id is null');
        this.router.navigate(['login']);
    }

    this.http.get('http://localhost:3000/loginGet/' + id).subscribe(res => {
        console.log(res);
    }, 

    err => {
        this.user = err.error.text;
    });

  }

}
