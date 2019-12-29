import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UsersModule } from "./users/users.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, UsersModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
