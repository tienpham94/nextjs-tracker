import Habit from "./Habit";

const HabitList = ({ habits }) => (
  <section>
    <h2>My Habits</h2>
    {habits.map(h => (
      <Habit key={h} habit={h} />
    ))}
  </section>
);

export default HabitList;
