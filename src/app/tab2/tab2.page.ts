import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})



export class Tab2Page implements OnInit

{


  inputValue2: string = "";

inputValue1:string = "";

  printing = {printvalue2:this.inputValue2 ,printvalue1:this.inputValue1}




  someFunction() {
    this.printing.printvalue2 = this.inputValue2;
    this.printing.printvalue1 = this.inputValue1;
  
    console.log(this.printing);

     this.dataService.setData(this.printing);

    
}




  constructor(public navCtrl: NavController, private dataService: DataService) {


    

  }
 
  ngOnInit(){

  }

}
