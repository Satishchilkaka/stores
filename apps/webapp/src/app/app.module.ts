import { NgModule } from "@angular/core";
import {FormsModule} from '@angular/forms'
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { ServerComponent } from "./server/server.component";
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [AppComponent, ServerComponent, TestComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([], { initialNavigation: "enabled" }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
