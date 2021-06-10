import { Component } from '@angular/core';
interface Todo {
  title: string
}
interface Input {
  name : string
}
@Component({
  selector: 'stores-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos : Todo[] = []
addHome() {

  this.todos.push({
    title: ' New store'
  })
}

}

