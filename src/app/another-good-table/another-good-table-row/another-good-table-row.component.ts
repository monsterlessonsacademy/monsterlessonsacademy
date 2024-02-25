import { Component, Input } from '@angular/core';
import { IssueInterfaceWithSelected, } from '../../goodTable/issue.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: '[app-another-good-table-row]',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './another-good-table-row.component.html',
  styleUrl: './another-good-table-row.component.css',
})
export class AnotherGoodTableRowComponent {
  @Input({ required: true }) issue: IssueInterfaceWithSelected | undefined;
}
