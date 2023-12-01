import { useState } from "react";

// React Redux
import { useDispatch } from "react-redux";

// Redux Actions
import { GetData } from "@/redux toolkit/features/FetchDataSlice";

const Task = ({ title, data, TaskStatus }) => {
  const [value, setValue] = useState({
    NewItem: "",
  });

  const dispatch = useDispatch();

  //Delete Task
  const deleteHandeler = async ({ id, type, sort }) => {
    const RequestOptions = {
      method: "DELETE",
      body: JSON.stringify({
        id,
        type,
        sort,
      }),
      headers: { "Content-Type": "application/json" },
    };

    const res = await fetch(
      "https://hr-todo.sahda.ir/delete.php",
      RequestOptions
    );

    const data = await res.json();
    if (data.status === 200) {
      console.log(data.message);

      dispatch(GetData()); //Updating
    }
  };

  //Edit Task
  const changeHandeler = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const EditTodoHandeler = async ({ id }) => {
    const RequestOptions = {
      method: "PUT",
      body: JSON.stringify({
        id,
        item: value.NewItem,
      }),
      headers: { "Content-Type": "application/json" },
    };

    const res = await fetch(
      "https://hr-todo.sahda.ir/update.php",
      RequestOptions
    );

    const data = await res.json();

    if (data.status === 200) {
      console.log(data.message);
      dispatch(GetData()); //Updating
    }
  };

  //Switch Status
  const SwitchHandeler = async ({ id, sort, type }) => {
    const RequestOptions = {
      method: "PUT",
      body: JSON.stringify({
        id,
        sort,
        type,
      }),
      headers: { "Content-Type": "application/json" },
    };

    const res = await fetch(
      "https://hr-todo.sahda.ir/update.php",
      RequestOptions
    );

    const data = await res.json();

    if (data.status === 200) {
      console.log(data.message);
      dispatch(GetData()); //Updating
    }
  };

  return (
    <div>
      <h2 className="mb-5 font-bold">{title} : </h2>
      {data &&
        data.map((dataItem) => (
          <div
            key={dataItem.id}
            className="min-w-full w-[200px] h-min bg-[#eee] shadow mb-4 p-3 rounded "
          >
            <h3>Item : {dataItem.item}</h3>
            <div className="w-full min-h-full flex-col justify-start items-center">
              <span>
                Status Task :{" "}
                <span
                  className={`${
                    TaskStatus ? "text-[green]" : "text-[firebrick]"
                  }`}
                >
                  {title}
                </span>
              </span>
              <button
                onClick={() =>
                  SwitchHandeler({
                    id: dataItem.id,
                    sort: true,
                    type: TaskStatus ? 1 : 2,
                  })
                }
                className={` ${
                  TaskStatus
                    ? "bg-[#ec7b7b] border-[firebrick] text-[firebrick]"
                    : "bg-[lightgreen] border-[green] text-[green]"
                } border  border-solid  rounded-full shadow py-1 px-2 w-full  `}
              >
                {TaskStatus ? "UnCompleted" : "Completed"}
              </button>
            </div>
            <div className="my-2 w-full min-h-full flex-col justify-start items-center ">
              <div className="W-full flex justify-center items-center py-3  ">
                <input
                  type="text"
                  name="NewItem"
                  value={value.item}
                  onChange={changeHandeler}
                  className="w-full h-fit px-2 py-1 mr-2 border border-solid border-[#eee] "
                />
                <button
                  className="py-1 px-2 shadow bg-[white] rounded "
                  onClick={() => EditTodoHandeler({ id: dataItem.id })}
                >
                  Edit
                </button>
              </div>
              <button
                onClick={() =>
                  deleteHandeler({
                    id: dataItem.id,
                    type: 2,
                    sort: true,
                  })
                }
                className="w-full py-1 px-2 shadow bg-[red] text-[white] rounded "
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Task;
