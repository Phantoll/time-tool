import {Component, Input} from '@angular/core';

const possibleAccents = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
const defaultAccent = 'light';

@Component({
    selector: 'tt-dashboard-card',
    templateUrl: './dashboard-card.component.html',
    styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent {
    @Input()
    title: string;

    @Input()
    accent = defaultAccent;

    getAccentColor() {
        const accent = possibleAccents.indexOf(this.accent) > -1 ? this.accent : defaultAccent;
        const bgClass = `bg-${accent}`;
        return (accent === 'light') ? bgClass : `text-white ${bgClass}`;
    }
}
