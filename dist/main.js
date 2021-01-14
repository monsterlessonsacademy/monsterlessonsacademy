var statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2
};
console.log(statuses.inProgress);
var Status;
(function (Status) {
    Status["NotStarted"] = "notStarted";
    Status["InProgress"] = "inProgress";
    Status["Done"] = "done";
})(Status || (Status = {}));
var notStrartedStatus = Status.NotStarted;
notStrartedStatus = Status.Done;
console.log(Status.InProgress);
