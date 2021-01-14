const statuses = {
  notStarted: 0,
  inProgress: 1,
  done: 2,
};

console.log(statuses.inProgress);

enum Status {
  NotStarted = "notStarted",
  InProgress = "inProgress",
  Done = "done",
}

interface Task {
  id: string;
  status: Status;
}

let notStrartedStatus: Status = Status.NotStarted;

notStrartedStatus = Status.Done;

console.log(Status.InProgress);
