import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  src:string ="assets/images/gallery-1.jpg";
  size:string="Size";
  sizes:string[] = ["Size","s","m","l","xl","xxl"];
  featured:any = [
    {src:"assets/images/product-1.jpg",name :"Red Printed T-Shirt",rate :4,price:"50.00"},
    {src:"assets/images/product-2.jpg",name :"HRX Sports Shoes",rate :4.5,price:"75.00"},
    {src:"assets/images/product-3.jpg",name :"HRX Gray Trackponts",rate :4.5,price:"45.00"},
    {src:"assets/images/product-4.jpg",name :"Blue Printed T-Shirt",rate :4,price:"55.00"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  changeSrc($e:any){
    this.src = $e.target.src;
  }
  
}
