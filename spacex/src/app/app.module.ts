import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RocketsComponent } from "./rockets/rockets.component";
import { HistoryComponent } from "./history/history.component";
import { LaunchesComponent } from "./launches/launches.component";
import { HttpClientModule } from "@angular/common/http";
import { BlueBGDirective } from "./blue-bg.directive";
import { RedColorDirective } from "./red-color.directive";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RocketsComponent,
    HistoryComponent,
    LaunchesComponent,
    BlueBGDirective,
    RedColorDirective
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
