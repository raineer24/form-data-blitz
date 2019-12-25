import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
//import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LayoutComponent } from "./layout/layout.component";

@NgModule({
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [LayoutComponent],
  exports: [FormsModule, ReactiveFormsModule],
  entryComponents: []
})
export class SharedModule {}
