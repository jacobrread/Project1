export const CreateTask = () => {};

return (
  <>
    <header>
      <h2> To create a new task fill out the information below</h2>
    </header>
    <div classname="flex">
      <p>
        Enter task name
        <input type="text" id="title" name="Enter task name" />
      </p>
      <p>
        Enter a description
        <input type="text" id="description" name="Enter a description" />
      </p>
      <p>
        Enter the estimated time
        <input type="text" id="time" name="Enter the estimated time" />
      </p>
      <input type="submit" value="create task" />
    </div>
  </>
);
