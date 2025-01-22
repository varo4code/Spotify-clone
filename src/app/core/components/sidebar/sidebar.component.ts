import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  route: Array<any> = [];

  menu: {
    genericItems: Array<any>, extraItems: Array<any>
  } = { genericItems: [], extraItems: [] }

  customOptions: Array<any> = []

  constructor() { }

  ngOnInit(): void {
    
    this.menu.genericItems = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'tracks']
      },
      {
        name: 'Liked Songs',
        icon: 'uil-heart',
        router: ['/', 'favs']
      },
      // {
      //   name: 'Search',
      //   icon: 'uil uil-search',
      //   router: ['/', 'history']
      // },
      {
        name: 'Your Library',
        icon: 'uil uil-books',
        router: ['/', 'history']
      }
    ]

    this.customOptions = [
      {
        name: 'My playlist Nº1',
        router: ['/']
      },
      {
        name: 'My playlist Nº2',
        router: ['/']
      },
      {
        name: 'My playlist Nº3',
        router: ['/']
      },
      {
        name: 'My playlist Nº4',
        router: ['/']
      }
    ]

  }

}
