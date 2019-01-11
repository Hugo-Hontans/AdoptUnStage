import { Component } from '@angular/core';

@Component({
    selector: 'bs-datepicker',
    templateUrl: './bs-datepicker.html'
})
export class DemoDatepickerDateInitialStateComponent {
    bsValue = new Date();
    bsRangeValue: Date[];
    maxDate = new Date();
    constructor() {
        this.maxDate.setDate(this.maxDate.getDate() + 7);
        this.bsRangeValue = [this.bsValue, this.maxDate];
    }
}