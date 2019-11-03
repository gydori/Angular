import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FruitsComponent } from "./fruits/fruits.component";
import { AppleComponent } from "./apple/apple.component";
import { PearComponent } from "./pear/pear.component";
import { PeachComponent } from "./peach/peach.component";
import { RouterModule, Routes } from "@angular/router";
const myRoutes: Routes = [
  { path: "", component: FruitsComponent },
  { path: "apple", component: AppleComponent },
  { path: "peach", component: PeachComponent },
  { path: "pear", component: PearComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    AppleComponent,
    PearComponent,
    PeachComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(myRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
