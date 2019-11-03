import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { DeveloperComponent } from "./developer/developer.component";
import { EngineerComponent } from "./engineer/engineer.component";
import { TeacherComponent } from "./teacher/teacher.component";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const myRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "developer", component: DeveloperComponent },
  { path: "engineer", component: EngineerComponent },
  { path: "teacher", component: TeacherComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DeveloperComponent,
    EngineerComponent,
    TeacherComponent,
    HomeComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(myRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
