import { ProductService } from './shared/product.service';
import { Component } from '@angular/core';
import { FilterArrayPipe } from './filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  title = 'app works!';
}
