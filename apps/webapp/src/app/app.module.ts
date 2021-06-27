import { NgModule } from "@angular/core";
import {FormsModule} from '@angular/forms'
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forRoot([], { initialNavigation: "enabled" }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
