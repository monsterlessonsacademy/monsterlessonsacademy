import { Component, computed, Input, signal } from '@angular/core';
import {
  IssueInterface,
  IssueInterfaceWithSelected,
} from '../goodTable/issue.interface';
import { AnotherGoodTableRowComponent } from './another-good-table-row/another-good-table-row.component';
import { FormsModule } from '@angular/forms';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-another-good-table',
  standalone: true,
  imports: [AnotherGoodTableRowComponent, FormsModule, NgClass, NgStyle],
  templateUrl: './another-good-table.component.html',
  styleUrl: './another-good-table.component.css',
})
export class AnotherGoodTableComponent {
  @Input({ required: true }) source: IssueInterface[] = [];
  readonly selectedIssues = signal<string[]>([]);
  readonly issues = computed<IssueInterfaceWithSelected[]>(() =>
    this.source.map((issue) => ({
      ...issue,
      selected: this.selectedIssues().includes(issue.id),
    })),
  );
  readonly indeterminate = computed(
    () => !this.allSelected() && this.selectedIssues().length >= 1,
  );
  private readonly allSelected = computed(
    () => this.selectedIssues().length === this.openIssues().length,
  );
  private readonly openIssues = computed(() =>
    this.issues().filter((issue) => issue.status === 'open'),
  );

  selectAllChange() {
    this.selectedIssues.update(() => {
      if (this.allSelected() || this.selectedIssues().length >= 1) {
        return [];
      } else {
        return this.openIssues().map((issue) => issue.id);
      }
    });
  }

  selectIssueChange(issueId: string) {
    this.selectedIssues.update((issues) =>
      issues.includes(issueId)
        ? issues.filter((i) => i !== issueId)
        : [...issues, issueId],
    );
  }
}
