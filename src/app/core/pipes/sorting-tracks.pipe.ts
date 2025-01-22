import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'sortingTracks'
})
export class SortingTracksPipe implements PipeTransform {

  transform(
    value: TrackModel[] = [],
    column: keyof TrackModel,
    order: 'asc' | 'desc' = 'asc'
  ): TrackModel[] {
    if (!value || !Array.isArray(value) || value.length === 0) {
      return [];
    }
  
    try {
      const tmpList = value.sort((a, b) => {
        const vA = a[column];
        const vB = b[column];
  
        if (vA == null || vB == null) {
          // Manejo de valores nulos o indefinidos
          return 0;
        }

        if (vA > vB) {
          return 1;
        }else if (vA == vB) {
          return 0;
        }else{
          return -1;
        }
      });
  
      let res = (order == 'asc') ? tmpList : tmpList.reverse();
      return res;
    } catch (error) {
      console.error('Something went wrong!', error);
      return [];
    }
  }

}
