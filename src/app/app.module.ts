import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
// import {ResizableModule} from './resizable.module';
import { AppComponent } from './app.component';
import { ResizeHandleDirective } from './resize-handle.directive';
import { ResizableDirective } from './resizable.directive';

@NgModule({
  declarations: [
    AppComponent,
    ResizeHandleDirective,
    ResizableDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    // ResizableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
