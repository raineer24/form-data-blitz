import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
//import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LayoutComponent } from "./layout/layout.component";
import { ModalComponent } from "./components/modal/components/modal.component";
@NgModule({
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [LayoutComponent, ModalComponent],
  exports: [FormsModule, ReactiveFormsModule, ModalComponent],
  entryComponents: []
})
export class SharedModule {}
