import Task from "./Task";

const CompletedTask = ({ title, data }) => {
  return <Task title={title} TaskStatus={true} data={data} />;
};

export default CompletedTask;
