import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // Check text
    if (text == "") {
      alert("Please add a task");
    }
    onAdd({ text, day, reminder });
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="relative m-2 rounded-md shadow-sm">
        <label
          htmlFor="Task"
          className="p-1 font-bold block text-lg font-large leading-6 ">
          Task
        </label>
        <input
          type="text"
          name="price"
          id="Task"
          className="block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Add Task"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="relative m-2 rounded-md shadow-sm">
        <label
          htmlFor="Date"
          className="p-1 font-bold block text-lg font-large leading-6 ">
          Date & Time
        </label>
        <input
          type="text"
          name="date"
          id="Date"
          className="block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Add Date"
          onChange={(e) => {
            setDay(e.target.value);
          }}
        />
      </div>
      <div className="relative m-2 rounded-md flex justify-evenly">
        <label
          htmlFor="reminder"
          className="p-1 font-bold block text-lg font-large leading-6 ">
          Set reminder ?
        </label>
        <input
          type="checkbox"
          name="price"
          id="reminder"
          className="rounded-md "
          placeholder="Add Task"
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
          checked={reminder}
        />
      </div>
      <input
        value="save"
        type="submit"
        className="btn w-full m-1 bg-black"></input>
    </form>
  );
};

export default AddTask;
