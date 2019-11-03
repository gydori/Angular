import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CarsComponent } from "./cars/cars.component";
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [AppComponent, CarsComponent, FilterComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
