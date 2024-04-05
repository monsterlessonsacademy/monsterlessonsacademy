import { DateTime, Info, Interval } from "luxon";
import "./calendar.css";
import { useState } from "react";
import classnames from "classnames";

const Calendar = ({ meetings }) => {
  const today = DateTime.local();
  const [activeDay, setActiveDay] = useState(null);
  const activeDayMeetings = meetings[activeDay?.toISODate()] ?? [];
  const [firstDayOfActiveMonth, setFirstDayOfActiveMonth] = useState(
    today.startOf("month")
  );
  const weekDays = Info.weekdays("short");
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
  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="calendar-headline">
          <div className="calendar-headline-month">
            {firstDayOfActiveMonth.monthShort}, {firstDayOfActiveMonth.year}
          </div>
          <div className="calendar-headline-controls">
            <div
              onClick={() => goToPreviousMonth()}
              className="calendar-headline-control"
            >
              «
            </div>
            <div
              onClick={() => goToToday()}
              className="calendar-headliner-controls-today calendar-headline-control"
            >
              Today
            </div>
            <div
              onClick={() => goToNextMonth()}
              className="calendar-headline-control"
            >
              »
            </div>
          </div>
        </div>
        <div className="calendar-weeks-grid">
          {weekDays.map((weekDay, weekDayIndex) => (
            <div key={weekDayIndex} className="calendar-weeks-grid-cell">
              {weekDay}
            </div>
          ))}
        </div>

        <div className="calendar-grid">
          {daysOfMonth.map((dayOfMonth, dayOfMonthIndex) => (
            <div
              key={dayOfMonthIndex}
              onClick={() => setActiveDay(dayOfMonth)}
              className={classnames({
                "calendar-grid-cell": true,
                "calendar-grid-cell-inactive":
                  dayOfMonth.month !== firstDayOfActiveMonth.month,
                "calendar-grid-cell-active":
                  activeDay?.toISODate() === dayOfMonth.toISODate(),
              })}
            >
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
