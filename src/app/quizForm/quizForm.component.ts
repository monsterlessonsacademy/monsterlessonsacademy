import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';

type FormAnswer = FormGroup<{ text: FormControl<string> }>;

type FormQuestion = FormGroup<{
  questionName: FormControl<string>;
  answers: FormArray<FormAnswer>;
}>;

type Form = FormGroup<{
  questions: FormArray<FormQuestion>;
}>;

@Component({
  selector: 'quiz-form',
  standalone: true,
  templateUrl: './quizForm.component.html',
  styleUrl: './quizForm.component.css',
  imports: [ReactiveFormsModule],
})
export class QuizFormComponent {
  fb = inject(NonNullableFormBuilder);
  quizForm: Form = this.fb.group({
    questions: this.fb.array<FormQuestion>([this.generateQuestion()]),
  });

  generateQuestion(): FormQuestion {
    return this.fb.group({
      questionName: '',
      answers: this.fb.array<FormAnswer>([]),
    });
  }

  addQuestion(): void {
    this.quizForm.controls.questions.push(this.generateQuestion());
  }

  removeQuestion(questionIndex: number): void {
    this.quizForm.controls.questions.removeAt(questionIndex);
  }

  addAnswer(questionIndex: number): void {
    const newAnswer: FormAnswer = this.fb.group({
      text: '',
    });
    this.quizForm.controls.questions
      .at(questionIndex)
      ?.controls?.answers?.push(newAnswer);
  }

  removeAnswer(questionIndex: number, answerIndex: number): void {
    this.quizForm.controls.questions
      .at(questionIndex)
      ?.controls?.answers?.removeAt(answerIndex);
  }

  onSubmit() {
    console.log(this.quizForm.getRawValue());
  }
}
