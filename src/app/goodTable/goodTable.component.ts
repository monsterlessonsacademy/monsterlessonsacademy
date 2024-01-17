import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, computed, signal } from '@angular/core';
import { IssueInterface } from './issue.interface';

interface IssueEntriesInterface {
  [key: string]: { isSelected: boolean };
}

@Component({
  selector: 'good-table',
  templateUrl: './goodTable.component.html',
  styleUrls: ['./goodTable.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class GoodTable implements OnInit {
  @Input({ required: true }) issues!: IssueInterface[];

  issueEntriesSig = signal<IssueEntriesInterface>({});
  issuesSig = signal<IssueInterface[]>([]);
  totalSelectedSig = computed(
    () =>
      Object.values(this.issueEntriesSig()).filter(
        (issueData) => issueData.isSelected
      ).length
  );
  indeterminateSig = computed(() => {
    const totalOpenedIssues = this.issuesSig().filter(
      (issue) => issue.status === 'open'
    ).length;
    return (
      this.totalSelectedSig() < totalOpenedIssues && this.totalSelectedSig() > 0
    );
  });

  ngOnInit() {
    this.issuesSig.set(this.issues);
    this.issueEntriesSig.set(this.convertIssuesToEntries(this.issues, false));
  }

  convertIssuesToEntries = (
    issues: IssueInterface[],
    isSelected: boolean
  ): IssueEntriesInterface => {
    const entries = issues.map((issue) => [
      issue.id,
      { isSelected: issue.status === 'open' ? isSelected : false },
    ]);
    return Object.fromEntries(entries);
  };

  selectRow(issueId: string): void {
    console.log('selectRow', issueId);
    const updatedIssueEntry = {
      ...this.issueEntriesSig()[issueId],
      isSelected: !this.issueEntriesSig()[issueId].isSelected,
    };
    const updatedIssueEntries = {
      ...this.issueEntriesSig(),
      [issueId]: updatedIssueEntry,
    };
    this.issueEntriesSig.set(updatedIssueEntries);
  }

  selectAll(event: Event): void {
    const target = event.target as HTMLInputElement;
    const updatedIssueEntries = this.convertIssuesToEntries(
      this.issuesSig(),
      target.checked
    );
    this.issueEntriesSig.set(updatedIssueEntries);
  }
}
