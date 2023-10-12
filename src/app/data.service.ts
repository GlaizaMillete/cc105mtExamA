import { Injectable } from "@angular/core";
import { Data } from "./data.model";

@Injectable ({ providedIn: 'root'})
export class DataService {
    listOfData: Data []=[ 
        new Data ('','Air Jordan','Jordan','Red & Black','2200','https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8a953551-c867-47b2-8d3e-b3452aa19071/air-jordan-xxxviii-pf-basketball-shoes-tTRwfF.png', 'available'),
            
        new Data ('','Nike Airmax 1','Nike','Blue & White','7895','https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/216eb752-54ca-4d8e-92d6-ccd41a092267/air-max-1-86-shoes-Hk4RWf.png', 'out-of-stock'),
        
        new Data ('','Run Falcon 3.0','Adidas','Black, Orange & Blue','3500','https://assets.adidas.com/images/w_600,f_auto,q_auto/b1028c8cfd574f988627af2a00aa9cf0_9366/Runfalcon_3.0_Shoes_Black_HP7550_42_detail.jpg','available')     
        
    ];
    getData(){                  // DISPLAY DATA
        return this.listOfData;
    }
    deleteData(index: number){          // DELETE DATA
        this.listOfData.splice(index, 1)
    }
    addData(data: Data){                // ADD DATA
        this.listOfData.push(data) 
    }
    updateData(index: number, data: Data){          // UPDATE DATA
        this.listOfData[index] = data
    }
    getSpecData(index: number) {            // GET SPECIFIC DATA
        return this.listOfData[index];
    }
} 