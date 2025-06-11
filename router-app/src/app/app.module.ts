import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ContactModule } from './contact/contact.module';
import { ProductsModule } from './products/products.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FirstComponent,
    SecondComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactModule,
    ProductsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
