import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  inject,
} from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { CommonModule } from '@angular/common';
import { TodosService } from '../../services/todos.service';
import { TodosSupabaseService } from '../../services/todosSupabase.service';

@Component({
  selector: 'app-todos-todo',
  templateUrl: './todo.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class TodoComponent implements OnInit, OnChanges {
  @Input({ required: true }) todo!: TodoInterface;
  @Input({ required: true }) isEditing!: boolean;
  @Output() setEditingId: EventEmitter<number | null> = new EventEmitter();

  @ViewChild('textInput') textInput?: ElementRef;

  todosService = inject(TodosService);
  todosSupabaseService = inject(TodosSupabaseService);
  editingText: string = '';

  ngOnInit(): void {
    this.editingText = this.todo.text;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isEditing'].currentValue) {
      setTimeout(() => {
        this.textInput?.nativeElement.focus();
      }, 0);
    }
  }

  changeText(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;
  }

  changeTodo(): void {
    const dataToUpdate = {
      text: this.editingText,
      is_completed: this.todo.is_completed,
    };
    this.todosSupabaseService
      .updateTodo(this.todo.id, dataToUpdate)
      .subscribe(() => {
        this.todosService.changeTodo(this.todo.id, this.editingText);
      });
    this.setEditingId.emit(null);
  }

  setTodoInEditMode(): void {
    this.setEditingId.emit(this.todo.id);
  }

  removeTodo(): void {
    this.todosSupabaseService.removeTodo(this.todo.id).subscribe(() => {
      this.todosService.removeTodo(this.todo.id);
    });
  }

  toggleTodo(): void {
    const dataToUpdate = {
      text: this.todo.text,
      is_completed: !this.todo.is_completed,
    };
    this.todosSupabaseService
      .updateTodo(this.todo.id, dataToUpdate)
      .subscribe(() => {
        this.todosService.toggleTodo(this.todo.id);
      });
  }
}
