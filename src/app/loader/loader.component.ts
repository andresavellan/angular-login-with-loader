import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']  
})
export class LoaderComponent implements OnInit {

  loading$ = this.loader.loadingIndicator$;

  constructor(
    public loader: LoadingService, 
  ) { }

  ngOnInit(): void {
  }

}
