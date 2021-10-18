import { Component, OnInit, Input } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-pop-up-box',
  templateUrl: './pop-up-box.component.html',
  styleUrls: ['./pop-up-box.component.scss']
})
export class PopUpBoxComponent implements OnInit { 

  

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { 

  }

  ngOnInit(): void {
   
  }

  



}
