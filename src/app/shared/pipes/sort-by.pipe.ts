import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
  transform<T>(value: T[] | null | undefined, field: string, direction: 'asc' | 'desc' = 'asc'): T[] {
    if (!Array.isArray(value) || !field) return value || [];

    const get = (obj: any, path: string) => {
      return path.split('.').reduce((acc, key) => acc && acc[key] !== undefined ? acc[key] : undefined, obj);
    };

    const sorted = [...value].sort((a: any, b: any) => {
      const A = get(a, field);
      const B = get(b, field);

      if (A == null && B == null) return 0;
      if (A == null) return -1;
      if (B == null) return 1;

      if (typeof A === 'string' && typeof B === 'string') {
        return A.localeCompare(B, undefined, { sensitivity: 'base' });
      }

      if (typeof A === 'number' && typeof B === 'number') {
        return A - B;
      }

      return String(A).localeCompare(String(B), undefined, { sensitivity: 'base' });
    });

    return direction === 'asc' ? sorted : sorted.reverse();
  }
}
