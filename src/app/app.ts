import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { email, Field, FieldTree, form, required, submit } from '@angular/forms/signals';

// https://stackblitz.com/edit/dynamic-form-angularv019?file=src%2Fdynamic-form%2Fdynamic-forms.service.ts

type FormAnswer = {
  text: string;
};

type FormQuestion = {
  questionName: string;
  answers: FormAnswer[];
};

type FormModel = {
  questions: FormQuestion[];
};

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [CommonModule, Field],
})
export class App {
  quizModel = signal<FormModel>({
    questions: [
      {
        questionName: '',
        answers: [],
      },
    ],
  });

  quizForm = form(this.quizModel);

  addQuestion(): void {
    this.quizForm
      .questions()
      .value.update((questions) => [...questions, { questionName: '', answers: [] }]);
  }

  removeQuestion(index: number): void {
    this.quizForm.questions().value.update((questions) => questions.filter((_, i) => i !== index));
  }

  addAnswer(questionIndex: number): void {
    this.quizModel.update((m) => ({
      questions: m.questions.map((q, i) =>
        i === questionIndex ? { ...q, answers: [...q.answers, { text: '' }] } : q,
      ),
    }));
  }

  removeAnswer(questionIndex: number, answerIndex: number): void {
    this.quizModel.update((m) => ({
      questions: m.questions.map((q, i) =>
        i === questionIndex
          ? {
              ...q,
              answers: q.answers.filter((_, ai) => ai !== answerIndex),
            }
          : q,
      ),
    }));
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('onSubmit', this.quizModel());
  }
}
