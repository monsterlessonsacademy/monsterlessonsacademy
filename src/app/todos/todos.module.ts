import { NgModule } from '@angular/core';

import { TodosComponent } from 'src/app/todos/components/todos/todos.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];

@NgModule({
  declarations: [TodosComponent],
  imports: [RouterModule.forChild(routes)],
})
export class TodosModule {}
