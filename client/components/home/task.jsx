import { Button } from '../common/button';

export const Task = ({ project, createTask }) => {
  return (
    <div className="border-2 rounded p-4">
      {project.name}
      <div>
        <Button onClick={() => createTask(project)}>Create Task</Button>
      </div>
    </div>
  );
};