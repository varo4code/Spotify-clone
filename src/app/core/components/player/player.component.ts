import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  song:any = {title: 'Blur', artist: 'Imagine Dragons', cover: 'assets/covers/imagine-dragons-mercury.webp'}

  constructor() { }

  ngOnInit(): void {
  }

}
