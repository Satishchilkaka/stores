import { Component } from "@angular/core";

@Component({
  selector: "stores-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
// styles: [` h3 { 
// color: darkblue;
// }`]
})
export class AppComponent {
  title = "Test webapp";
  name= '';
  placeholder= 'name'
}
