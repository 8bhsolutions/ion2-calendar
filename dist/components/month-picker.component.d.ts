import { EventEmitter } from '@angular/core';
import { CalendarMonth } from "../calendar.model";
export declare class MonthPickerComponent {
    month: CalendarMonth;
    color: string;
    onSelect: EventEmitter<number>;
    _thisMonth: Date;
    _monthFormat: string[];
    set monthFormat(value: string[]);
    get monthFormat(): string[];
    constructor();
    _onSelect(month: number): void;
}
