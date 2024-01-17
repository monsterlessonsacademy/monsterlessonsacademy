import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { TodosService } from './services/todos.service';
import { TodosFirebaseService } from './services/todosFirebase.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MainComponent],
})
export class TodosComponent implements OnInit {
  todosService = inject(TodosService);
  todosFirebaseService = inject(TodosFirebaseService);

  ngOnInit(): void {
    this.todosFirebaseService.getTodos().subscribe((todos) => {
      this.todosService.todosSig.set(todos);
    });
  }
}
