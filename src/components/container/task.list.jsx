import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)
  const otherdefaultTask = new Task('Primera prueba', 'Prueba', false, LEVELS.URGENTE)
 
 
  //Estado del componente
  const [tasks, setTasks] = useState([defaultTask])
  const [loading, setLoading] = useState(true)




  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log('Task State has been modified')
    setLoading(false)
    return () => {
      console.log('Tasklista component is going to unmount')
    };
  }, [tasks]);





  const changeClompeted = (id) => {
    console.log('TODO: Cambiar el estado de una tarea')
  }





  return (
    <div>
      <div>
        <h4>Your Tasks:</h4>
      </div>
      {/*  TODO: aplicar FOr/Map para renderizar una lista */}
      <TaskComponent task={defaultTask}/>
      <TaskComponent task={otherdefaultTask}/>
    </div>
  );
};




export default TaskListComponent;
