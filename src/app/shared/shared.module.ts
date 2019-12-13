import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinPipe } from './pipes/join.pipe';
import { Post } from './models/post';



@NgModule({
  declarations: [JoinPipe],
  imports: [
    CommonModule
  ],
  exports: [
    JoinPipe,
  ],
})
export class SharedModule { }
