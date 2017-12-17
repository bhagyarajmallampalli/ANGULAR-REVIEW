import { Component, OnInit } from '@angular/core';

import { AuthorsService } from '../authors-service.service'

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [AuthorsService]
})

export class AuthorsComponent implements OnInit {
  
  authors: any;

  constructor(private _authorsService: AuthorsService) { 
    this.authors = _authorsService.getAuthors();
    }

  ngOnInit() {
  }

  getAuthors(){
    return this.authors;
  }
}
