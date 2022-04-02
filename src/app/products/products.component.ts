import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product:any ;
  constructor(private _ProductsService:ProductsService) {
    _ProductsService.getProducts().subscribe((data)=>{
      this.product = data.slice(0,20);
    })
  }
  ngOnInit(): void {
  }
}
