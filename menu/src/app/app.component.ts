import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';  
    menuItems: MenuItem[] = [
      { name: 'pineapple Pizza', category: 'dinner', price: 10.09 },
      { name: 'custard Pizza', category: 'dinner', price: 6.11 },
      { name: 'spicy Chicken Pizza', category: 'sides', price: 11.23 },
      { name: 'Buffalo Wings', category: 'sides', price: 7.11 },
      { name: 'sweet Wings', category: 'dinner', price: 7.45 },
      { name: 'Honey Mustard Wings', category: 'sides', price: 5.21 }
    ];
    getByCategory(cat: string): MenuItem[] {
      return this.menuItems.filter(item => item.category === cat);
    }
  
    getUniqueCategories(): string[] {
      return Array.from(new Set(this.menuItems.map(item => item.category)));
    }
}


