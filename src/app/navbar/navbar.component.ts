import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navbar: any = [
    { name: 'Home', page: 'home'},
    { name: 'Products', page: 'products'},
    { name: 'About', page: 'about'},
    { name: 'Contact', page: 'Contact'},
    { name: 'Account', page: 'Account'}
  ];
  showlist:boolean = false;
  show:any ="show";
  constructor( private _Router: Router) {}

  ngOnInit(): void {}
  showList(){
      this.showlist = !this.showlist;
      console.log(this.showlist);
      
  }
  redirect(page: string) {
    this._Router.navigate([`/${page}`]);
  }
}
