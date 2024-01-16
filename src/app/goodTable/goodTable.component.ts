import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Issue, IssueInterface } from './issue.interface';

@Component({
  selector: 'good-table',
  templateUrl: './goodTable.component.html',
  styleUrls: ['./goodTable.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class GoodTable implements OnInit {
  @Input({ required: true }) issues!: IssueInterface[];

  selectDeselectAllIsChecked = false;
  numCheckboxesSelected = 0;
  checkedState: any;
  issueEntries: {
    [key: string]: { isSelected: boolean };
  } = {};

  ngOnInit() {
    this.checkedState = new Array(this.issues.length).fill({
      checked: false,
      backgroundColor: '#ffffff',
    });
    this.issueEntries = this.convertIssuesToEntries(false);
  }

  convertIssuesToEntries = (isSelected: boolean) => {
    const entries = this.issues.map((issue) => [
      issue.id,
      { isSelected: issue.status === 'open' ? isSelected : false },
    ]);
    return Object.fromEntries(entries);
  };

  onClick(index: any, issue: any) {
    if (issue.status === 'open') {
      this.handleOnChange(index);
    }
  }

  handleOnChange(position: any) {
    const updatedCheckedState = this.checkedState.map(
      (element: any, index: any) => {
        if (position === index) {
          return {
            ...element,
            checked: !element.checked,
            backgroundColor: element.checked ? '#ffffff' : '#eeeeee',
          };
        }
        return element;
      }
    );
    this.checkedState = updatedCheckedState;
    console.log('handleOnChange', this.checkedState, position);
    const totalSelected = updatedCheckedState
      .map((element: any) => element.checked)
      .reduce((sum: any, currentState: any, index: any) => {
        if (currentState) {
          return sum + this.issues[index].value;
        }
        return sum;
      }, 0);
    this.numCheckboxesSelected = totalSelected;
    console.log;
    this.handleIndeterminateCheckbox(totalSelected);
  }

  handleIndeterminateCheckbox(total: any) {
    const indeterminateCheckbox = document.getElementById(
      'custom-checkbox-selectDeselectAll'
    );
    let count = 0;

    this.issues.forEach((element: any) => {
      if (element.status === 'open') {
        count += 1;
      }
    });

    if (total === 0) {
      (indeterminateCheckbox as any).indeterminate = false;
      this.selectDeselectAllIsChecked = false;
    }
    if (total > 0 && total < count) {
      (indeterminateCheckbox as any).indeterminate = true;
      this.selectDeselectAllIsChecked = false;
    }
    if (total === count) {
      (indeterminateCheckbox as any).indeterminate = false;
      this.selectDeselectAllIsChecked = true;
    }
  }

  handleSelectDeselectAll(event: any) {
    let { checked } = event.target;

    const allTrueArray: any = [];
    this.issues.forEach((element: any) => {
      if (element.status === 'open') {
        allTrueArray.push({ checked: true, backgroundColor: '#eeeeee' });
      } else {
        allTrueArray.push({ checked: false, backgroundColor: '#ffffff' });
      }
    });

    const allFalseArray = new Array(this.issues.length).fill({
      checked: false,
      backgroundColor: '#ffffff',
    });
    if (checked) {
      this.checkedState = allTrueArray;
    } else {
      this.checkedState = allFalseArray;
    }

    const totalSelected = (checked ? allTrueArray : allFalseArray)
      .map((element: any) => element.checked)
      .reduce((sum: any, currentState: any, index: any) => {
        if (currentState && this.issues[index].status === 'open') {
          return sum + this.issues[index].value;
        }
        return sum;
      }, 0);
    this.numCheckboxesSelected = totalSelected;
    this.selectDeselectAllIsChecked = !this.selectDeselectAllIsChecked;
  }
}
