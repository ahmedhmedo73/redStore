import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }
  featured:any = [
    {src:"assets/images/product-1.jpg",name :"Red Printed T-Shirt",rate :4,price:"50.00"},
    {src:"assets/images/product-2.jpg",name :"HRX Sports Shoes",rate :4.5,price:"75.00"},
    {src:"assets/images/product-3.jpg",name :"HRX Gray Trackponts",rate :4.5,price:"45.00"},
    {src:"assets/images/product-4.jpg",name :"Blue Printed T-Shirt",rate :4,price:"55.00"},
  ]
  latest:any = [
    {src:"assets/images/product-5.jpg",name :"Puma Gray Sports Shoes",rate :4,price:"95.00"},
    {src:"assets/images/product-6.jpg",name :"Black Printed T-Shirt",rate :4.5,price:"55.00"},
    {src:"assets/images/product-7.jpg",name :"HRX set of 3 socks",rate :4.5,price:"30.00"},
    {src:"assets/images/product-8.jpg",name :"Black fassil Watch",rate :4,price:"120.00"},
    {src:"assets/images/product-9.jpg",name :"Black Spartx Watch",rate :4,price:"135.00"},
    {src:"assets/images/product-10.jpg",name :"Black HRX Shoes",rate :4.5,price:"50.00"},
    {src:"assets/images/product-11.jpg",name :"Gray Nike Shoes",rate :4.5,price:"55.00"},
    {src:"assets/images/product-12.jpg",name :"HRX Black Trackponts",rate :4,price:"75.00"},
  ]
  review:any = [
    {src:"assets/images/user-2.png",name :"Sean Parker",rate :4,review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, suscipit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, suscipit!"},
    {src:"assets/images/user-2.png",name :"Mike Smith",rate :4.5,review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, suscipit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, suscipit!"},
    {src:"assets/images/user-2.png",name :"Mabel Joe",rate :4,review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, suscipit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, suscipit!"}
  ]
  logo:any= [
    {src:"assets/images/logo-coca-cola.png"},
    {src:"assets/images/logo-godrej.png"},
    {src:"assets/images/logo-oppo.png"},
    {src:"assets/images/logo-paypal.png"},
    {src:"assets/images/logo-philips.png"},
  ]
  ngOnInit(): void {
  }

}
