import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

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
        router: ['/', 'auth']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Biblioteca',
        icon: 'uil uil-books',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' }
      }
    ]

    this.menu.extraItems = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-circle'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart'
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]

  }

}
