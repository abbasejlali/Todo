import { useState } from "react";

// React Redux
import { useDispatch } from "react-redux";

// Redux Actions
import { GetData } from "@/redux toolkit/features/FetchDataSlice";

const AddTodo = () => {
  const [value, setValue] = useState({
    item: "",
  });

  const dispatch = useDispatch();

  const AddNewTodo = async () => {
    const RequestOptions = {
      method: "POST",
      body: JSON.stringify({
        item: value.item,
      }),
      headers: { "Content-Type": "application/json" },
    };

    const res = await fetch(
      "https://hr-todo.sahda.ir/create.php",
      RequestOptions
    );

    const data = await res.json();
    if (data.status === 200) {
      console.log(data.message);
      dispatch(GetData());
    }
  };

  const changeHandeler = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };
  return (
    <div className="W-full flex justify-center items-center py-3  ">
      <input
        type="text"
        name="item"
        value={value.item}
        onChange={changeHandeler}
        className="w-[300px] h-fit p-2 mr-2 border border-solid border-[#eee] "
      />
      <button
        className=" border rounded bg-[#eee] p-2 shadow "
        onClick={AddNewTodo}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
