import { Component, Input, OnInit } from '@angular/core';   
import { Data } from "../data.model";
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  @Input() index:number = 0;
  @Input() data?: Data;


  constructor (private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  onDelete(){
    this.dataService.deleteData(this.index);
  }

  onEdit(){
    this.router.navigate(['/edit', this.index]);
  }


 
}
