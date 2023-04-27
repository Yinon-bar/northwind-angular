import { Component } from '@angular/core';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent {

    public special: string = 'Custards';

    public desserts = [
        { id: 1, name: 'Cakes' },
        { id: 2, name: 'Cupcakes' },
        { id: 3, name: 'Brownies' },
        { id: 4, name: 'Muffins' },
        { id: 5, name: 'Cheesecakes' }
    ];


    public isWeekend(): boolean{
        const d = new Date();
        const day = d.getDay();
        return day >= 5;
    }


}
