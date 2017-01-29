import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Bounce} from "./components/bounce/bounce.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[Bounce],
  declarations: [Bounce]
})
export class SharedModule { }
