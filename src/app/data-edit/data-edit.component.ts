import { Component } from '@angular/core';
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
export class DataEditComponent {

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
        editimage = editData.Image;
        editstatus = editData.Status;
    
        
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
      image: new FormControl (editimage, [Validators.required]),
      status: new FormControl (editstatus, [Validators.required])
     
    });
  }

  onSubmit(){
    if (this.form.valid) {
    const id = this.form.value.id;
    const name = this.form.value.name;
    const brand = this.form.value.brand;
    const color = this.form.value.color;
    const price = this.form.value.price;
    const image = this.form.value.image;
    const status = this.form.value.status;


    const data: Data = new Data
    ( id, name, brand, color, price, image, status );


    if(this.editMode){
      this.dataService.updateData(this.index, data)
    }
    else{
      this.dataService.addData(data);
    }


    this.router.navigate(['/datatable'])
    }

  }

}
