import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../i-user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() userData?:any ;
  constructor() { }

  ngOnInit(): void {
    
  }

}
