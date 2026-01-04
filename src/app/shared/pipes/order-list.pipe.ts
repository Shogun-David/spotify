import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/track.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: TrackModel[], args: string | null = null, sort: string = 'asc'): TrackModel[] {
    try {
      if (!args || args === null) {
        return value;
      } else {
        const tmpList = [...value].sort((a, b) => {
          const aValue = a[args as keyof TrackModel];
          const bValue = b[args as keyof TrackModel];
          
          if (aValue < bValue) {
            return -1;
          } else if (aValue === bValue) {
            return 0;
          } else {
            return 1;
          }
        });

        return (sort === 'asc') ? tmpList : tmpList.reverse();
      }
    } catch (error) {
      console.error('Error in OrderListPipe:', error);
      return value;
    }
  }
}
