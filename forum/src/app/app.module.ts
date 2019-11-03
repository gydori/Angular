import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostListComponent } from "./posts/components/post-list/post-list.component";
import { HttpClientModule } from "@angular/common/http";
import { PostComponent } from './posts/components/post/post.component';

@NgModule({
  declarations: [AppComponent, PostListComponent, PostComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
