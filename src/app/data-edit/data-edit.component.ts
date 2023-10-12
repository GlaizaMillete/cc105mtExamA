import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Data } from '../data.model';
import { v4 as glaiza } from 'uuid';

@Component({
  selector: 'app-data-edit',
  templateUrl: './data-edit.component.html',
  styleUrls: ['./data-edit.component.css']
})
export class DataEditComponent implements OnInit {

  form! : FormGroup;
  index : number = 0;
  editMode = false;
  constructor (private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let  editid = glaiza();
    let  editname = '';
    let  editbrand = '';
    let  editcolor = '';
    let  editprice = '';
    let  editimage = '';
    let  editstatus = '';
   

    this.route.params.subscribe((params: Params) => {
      if (params['index']){
        console.log(params['index']);
        this.index = params ['index'];
      
        const editData = this.dataService.getSpecData(this.index);

        editid = editData.ID;
        editname = editData.Name;
        editbrand = editData.Brand;
        editcolor = editData.Color;
        editprice = editData.Price;
        editstatus = editData.Status;
        editimage = editData.Image;
        
        this.editMode = true;
      }
    }
    );
    this.form = new FormGroup({
      id: new FormControl (editid, [Validators.required]),
     name: new FormControl (editname, [Validators.required]),
     brand: new FormControl (editbrand, [Validators.required]),
      color: new FormControl (editcolor, [Validators.required]),
      price: new FormControl (editprice, [Validators.required]),
      status: new FormControl (editstatus, [Validators.required]),
      image: new FormControl (editimage, [Validators.required]),
    });
  }

  onSubmit(){
    const id = this.form.value.id;
    const name = this.form.value.name;
    const brand = this.form.value.brand;
    const color = this.form.value.color;
    const price = this.form.value.price;
    const status = this.form.value.status;
    const image = this.form.value.image;
    const action = this.form.value.action;

    const data: Data = new Data(
      id, name, brand, color, price, status, image, action
    );

    if(this.editMode){
      this.dataService.updateData(this.index, data)
    }
    else{
      this.dataService.addData(data);
    }
    this.router.navigate(['/datatable'])
  }

}


