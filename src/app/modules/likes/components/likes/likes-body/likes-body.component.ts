import { TrackModel } from '@core/models/tracks.model';
import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../../data/tracks.json';

@Component({
  selector: 'app-likes-body',
  templateUrl: './likes-body.component.html',
  styleUrls: ['./likes-body.component.scss']
})
export class LikesBodyComponent implements OnInit {
  tracks: TrackModel[] = [];
  orderOptions
    : {column: keyof TrackModel, order: 'asc' | 'desc' }
    = {column: 'name', order: 'asc'}

  constructor() { }

  ngOnInit(): void {
    const {data} = (dataRaw as any).default;
    this.tracks = data;
  }

  changeOrder(newColumn: keyof TrackModel){
    const {order} = this.orderOptions;
    const {column} = this.orderOptions;
    this.orderOptions = {
      column: newColumn,
      order: (order == 'asc' && column == newColumn) ? 'desc' : 'asc'
    }
    console.log(this.orderOptions);
    
  }

}
