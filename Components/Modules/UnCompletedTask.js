import Task from "./Task";

const UnCompletedTask = ({ data, title }) => {
  return <Task title={title} TaskStatus={false} data={data} />;
};

export default UnCompletedTask;
