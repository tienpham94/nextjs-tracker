import HabitButton from "./HabitButton";

const colors = ["#718096", "#F56565", "#F6E05E", "#68D391", "#63B3ED"];

const Habit = ({ habit, index }) => {
  const dates = getLast5Days();
  const color = "#718096";
  return (
    <article>
      <h3>{habit}</h3>
      <div>
        {dates.map(date => (
          <HabitButton key={date.getTime()} date={date} />
        ))}
      </div>
      <style jsx>{`
        h3 {
          border-bottom: solid 4px ${colors[index]};
        }
      `}</style>
    </article>
  );
};

const getLast5Days = () => {
  const dates = "01234".split("").map(day => {
    const tempDate = new Date();
    tempDate.setDate(tempDate.getDate() - day);
    return tempDate;
  });
  return dates;
};

export default Habit;
