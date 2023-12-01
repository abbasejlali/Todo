import { useEffect } from "react";

// Components Modules
import AddTodo from "../Modules/AddTodo";
import UnCompletedTask from "../Modules/UnCompletedTask";
import CompletedTask from "../Modules/CompletedTask";

// React Redux
import { useSelector } from "react-redux";

const Todo = ({ dataMain }) => {
  // Updating data
  const { data } = useSelector((store) => store.DataReducer);

  return (
    <>
      <AddTodo />
      <div className="w-full h-min-[200px] flex justify-around items-start ">
        {dataMain && !data.completed && (
          <>
            <UnCompletedTask
              title="UnCompleted Task"
              data={dataMain.uncompleted}
            />
            <CompletedTask title="Completed Task" data={dataMain.completed} />
          </>
        )}

        {data.completed && (
          <>
            <UnCompletedTask title="UnCompleted Task" data={data.uncompleted} />
            <CompletedTask title="Completed Task" data={data.completed} />
          </>
        )}
      </div>
    </>
  );
};

export default Todo;
