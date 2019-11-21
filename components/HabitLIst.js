import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Habit from "./Habit";

const GET_HABITS = gql`
  query getHabits {
    habits {
      _id
      name
    }
  }
`;

const HabitList = () => {
  const { data, loading } = useQuery(GET_HABITS);
  if (loading) return <section />;

  const { habits } = data;
  return (
    <section>
      <h2>My Habits</h2>
      {habits.map((h, index) => (
        <Habit key={h._id} habit={h} index={index} />
      ))}
    </section>
  );
};

export default HabitList;
