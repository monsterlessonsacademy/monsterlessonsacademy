import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from 'src/app/todos/components/header/header.component';
import { TodosService } from 'src/app/todos/services/todos';
import { FooterComponent } from 'src/app/todos/components/footer/footer.component';
import { TodosComponent } from 'src/app/todos/components/todos.component';
import { MainComponent } from 'src/app/todos/components/main/main.component';
import { TodoComponent } from 'src/app/todos/components/todo/todo.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TodosComponent,
    MainComponent,
    TodoComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [TodosService],
})
export class TodosModule {}
