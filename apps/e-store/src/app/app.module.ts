import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireFunctionsModule } from '@angular/fire/functions'
import { AngularFireStorageModule } from '@angular/fire/storage'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FooterComponent } from '../app/components/footer/footer.component';
import { HeaderComponent } from '../app/components/header/header.component'
import { MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatTableModule} from '@angular/material/table';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { ItemsComponent } from '../app/components/items/items.component';
import {ItemService} from '../app/service/item.service';


@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, ItemsComponent],
  imports: [BrowserModule,MatTabsModule, MatMenuModule, BrowserModule, 
    MatIconModule, MDBBootstrapModule, CommonModule, MatToolbarModule, MatTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
 
})
export class AppModule {}
