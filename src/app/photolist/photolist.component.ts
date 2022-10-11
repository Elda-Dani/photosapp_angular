import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-photolist',
  templateUrl: './photolist.component.html',
  styleUrls: ['./photolist.component.css']
})
export class PhotolistComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }


  fetchData=()=>{
    this.myapi.viewPhotos().subscribe(
      (data)=>{
        this.photoData=data
      }
    )
  }
photoData:any =[]

  ngOnInit(): void {
  }

}
