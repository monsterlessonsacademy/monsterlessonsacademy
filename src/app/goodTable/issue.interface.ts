export interface IssueInterface {
  id: string;
  name: string;
  message: string;
  status: 'open' | 'resolved';
  numEvents: number;
  numUsers: number;
  value: number;
}

export interface IssueInterfaceWithSelected extends IssueInterface {
  selected: boolean;
}
