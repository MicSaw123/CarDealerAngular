import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  @Input() title = '';
  @Input() productionDate = '';
  @Input() images?: Uint32Array[];
  @Input() id?: number;
  @Input() mileage?: number;
  @Input() horsepower?: number;
  @Input() displacement?: number;
  @Input() fuelType?: number;
  @Input() carCondition?: string;

  constructor(private router: Router) {
  }

  onSelect(id: number){
    this.router.navigate(['/listing', id]);

  }
}
