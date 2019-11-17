import Habit from "./Habit";

const HabitList = ({ habits }) => (
  <section>
    <h2>My Habits</h2>
    {habits.map((h, index) => (
      <Habit key={h} habit={h} index={index} />
    ))}
  </section>
);

export default HabitList;
