import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dessert-item',
  templateUrl: './dessert-item.component.html',
  styleUrls: ['./dessert-item.component.css']
})
export class DessertItemComponent {

    @Input() 
    public desser : {id: number, name: string }

}
