import { Pipe, PipeTransform, LOCALE_ID, Inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';

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

    dPipe: DecimalPipe;

    constructor(@Inject(LOCALE_ID) localeId) {
        this.dPipe = new DecimalPipe(localeId);
    }

    private units = ['bytes', 'KB', 'MB', 'GB', 'TB'];

    transform(bytes: number = 0, precision: number = 2): string {
        let unitIdx = 0;
        let workSize = bytes;

        while (workSize >= 1024) {
            workSize /= 1024;
            unitIdx++;
        }

        const sz = bytes < 1024 ? bytes : this.dPipe.transform(workSize, `1.${precision}-${precision}`);
        return `${sz} ${this.units[unitIdx]}`;
    }
}