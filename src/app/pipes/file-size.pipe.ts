import { Pipe, PipeTransform } from '@angular/core';

/*
 * Convert bytes into largest possible unit.
 * Support bytes, KB, MB, GB, TB units
 * Takes a precision argument that defaults to 2.
 * Usage:
 *   bytes | fileSize:precision
 * Example:
 *   {{ 2048 | fileSize}}
 *   should format to: 2.00 KB
*/
@Pipe({name: 'fileSize'})
export class FileSizePipe implements PipeTransform {

  transform(bytes: number = 0, precision: number = 2 ): string {
    return '?';
  }
}