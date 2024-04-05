import { DateTime, Info, Interval } from "luxon";
import "./calendar.css";
import { useState } from "react";

const Calendar = ({ meetings }) => {
  const today = DateTime.local();
  const [activeDay, setActiveDay] = useState(null);
  const activeDayMeetings = meetings[activeDay?.toISODate()] ?? [];
  console.log("activeDayMeetings", activeDayMeetings);
  const [firstDayOfActiveMonth, setFirstDayOfActiveMonth] = useState(
    today.startOf("month")
  );
  const weekDays = Info.weekdays("narrow");
  const daysOfMonth = Interval.fromDateTimes(
    firstDayOfActiveMonth.startOf("week"),
    firstDayOfActiveMonth.endOf("month").endOf("week")
  )
    .splitBy({ day: 1 })
    .map((d) => d.start);
  const goToPreviousMonth = () => {
    setFirstDayOfActiveMonth(firstDayOfActiveMonth.minus({ month: 1 }));
  };
  const goToNextMonth = () => {
    setFirstDayOfActiveMonth(firstDayOfActiveMonth.plus({ month: 1 }));
  };
  const goToToday = () => {
    setFirstDayOfActiveMonth(today.startOf("month"));
  };
  console.log("!!!", activeDay?.toLocaleString(DateTime.DATETIME_FULL));
  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="calendar-headline">
          <div className="calendar-headline-month">
            {firstDayOfActiveMonth.monthShort}, {firstDayOfActiveMonth.year}
          </div>
          <div className="calendar-headline-controls">
            <div onClick={() => goToPreviousMonth()}>«</div>
            <div onClick={() => goToToday()}>Today</div>
            <div onClick={() => goToNextMonth()}>»</div>
          </div>
        </div>
        <div className="calendar-grid">
          {weekDays.map((weekDay, weekDayIndex) => (
            <div key={weekDayIndex}>{weekDay}</div>
          ))}
          {daysOfMonth.map((dayOfMonth, dayOfMonthIndex) => (
            <div key={dayOfMonthIndex} onClick={() => setActiveDay(dayOfMonth)}>
              {dayOfMonth.day}
            </div>
          ))}
        </div>
      </div>
      <div className="schedule">
        <div className="schedule-headline">
          {activeDay === null && <div>Please select a day</div>}
          {activeDay && (
            <div>{activeDay.toLocaleString(DateTime.DATE_MED)}</div>
          )}
        </div>
        <div>
          {activeDay && activeDayMeetings.length === 0 && (
            <div>No Planned Meetings Today</div>
          )}
          {activeDay && activeDayMeetings.length > 0 && (
            <>
              {activeDayMeetings.map((meeting, meetingIndex) => (
                <div key={meetingIndex}>{meeting}</div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
