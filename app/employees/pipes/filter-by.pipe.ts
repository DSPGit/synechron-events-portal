import { Pipe, PipeTransform } from '@angular/core';
import { SepEmployee } from '../models/sep-employee';


@Pipe({
    name: 'employeesFilter'
})

export class FilterByPipe implements PipeTransform {
    transform(value: SepEmployee[], ...args: any[]): SepEmployee[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((employee: SepEmployee) =>
            employee.employeeName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}