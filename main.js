const oldDate = luxon.DateTime.local();
const result = oldDate
  .setZone("America/New_York")
  .minus({ weeks: 1 })
  .startOf("day")
  .toISO();

console.log("oldDate", oldDate.toString());
console.log(result);
