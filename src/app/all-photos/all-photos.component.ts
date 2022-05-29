import { Component, OnInit } from '@angular/core';
import { IPhoto } from '../i-photo';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-all-photos',
  templateUrl: './all-photos.component.html',
  styleUrls: ['./all-photos.component.css']
})
export class AllPhotosComponent implements OnInit {
  allPhotos?: IPhoto[];

  constructor(private PhotosService:PhotosService) { }

  ngOnInit(): void {
    this.PhotosService.getPhotos().subscribe(x => {
      this.allPhotos = x;
    })
  }

}
