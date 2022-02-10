export const CreateProject = () => {};

return (
  <>
    <header>
      <h2> To create a new project fill out the information below</h2>
    </header>
    <div classname="flex">
      <p>
        Enter task name
        <input type="text" id="title" name="Enter project name" />
      </p>
      <input type="submit" value="create project" />
    </div>
  </>
);
