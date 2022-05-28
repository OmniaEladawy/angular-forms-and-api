import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  image = "../../assets/imgs/Fast-Turnaround-Time.png"
  constructor() { }

  ngOnInit(): void {
  }

}
