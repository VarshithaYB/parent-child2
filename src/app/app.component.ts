import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentchild2';

  parentItems :string[]=[];
  onChildEvent(newItem: string)
  {
    this.parentItems.push(newItem)
  }
}
