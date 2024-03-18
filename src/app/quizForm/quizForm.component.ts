import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
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

  onSubmit() {
    console.log(this.quizForm.getRawValue());
  }

  generateQuestion(): FormQuestion {
    return this.fb.group({
      questionName: '',
      answers: this.fb.array<FormAnswer>([]),
    });
  }

  addQuestion(): void {
    this.quizForm.controls.questions.push(this.generateQuestion());
  }

  removeQuestion(questionIndex: number) {
    this.quizForm.controls.questions.removeAt(questionIndex);
  }

  removeAnswer(questionIndex: number, answerIndex: number) {
    this.quizForm.controls.questions
      .at(questionIndex)
      .controls.answers.removeAt(answerIndex);
  }

  addAnswer(questionIndex: number): void {
    const newAnswer: any = this.fb.group({
      text: '',
    });
    this.quizForm.controls.questions.controls
      .at(questionIndex)
      ?.controls?.answers?.push(newAnswer);
  }
}
