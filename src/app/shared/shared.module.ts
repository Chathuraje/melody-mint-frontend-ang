import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NgZorroModule } from './ng-zorro/ng-zorro.module';
import { ChunkPipe } from '../@application/pipes/chunk.pipe';
import { FooterComponent } from './footer/footer/footer.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';



@NgModule({
  declarations: [
    ChunkPipe,
  ],
  imports: [
    CommonModule,
    NgZorroModule,
    MaterialModule,
  ],
  exports: [
    NgZorroModule,
    MaterialModule,
    ChunkPipe,
  ]
})
export class SharedModule { }
