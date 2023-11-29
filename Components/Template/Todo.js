import { useEffect } from "react";

// Components Modules
import AddTodo from "../Modules/AddTodo";
import UnCompletedTask from "../Modules/UnCompletedTask";
import CompletedTask from "../Modules/CompletedTask";

// React Redux
import { useDispatch, useSelector } from "react-redux";

// Redux  Actions
import { GetData } from "@/redux toolkit/features/FetchDataSlice";

const Todo = () => {
  const { data, loading } = useSelector((store) => store.DataReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetData());
  }, []);

  if (loading)
    return (
      <h2 className="-translate-x-[50%] -translate-y-[50%] fixed top-[50%] bg-[#eee] shadow  left-[50%] z-10 bg-red p-4 rounded-lg ">
        Loading...
      </h2>
    );

  return (
    <>
      <AddTodo />
      <div className="w-full h-min-[200px] flex justify-around items-start ">
        {data ? (
          <>
            <UnCompletedTask title="UnCompleted Task" data={data.uncompleted} />
            <CompletedTask title="Completed Task" data={data.completed} />
          </>
        ) : (
          <h2>Loading</h2>
        )}
      </div>
    </>
  );
};

export default Todo;
