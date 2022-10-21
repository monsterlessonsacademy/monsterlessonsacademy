import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  imports: [CommonModule],
  exports: [PaginationComponent],
  declarations: [PaginationComponent],
})
export class PaginationModule {}
