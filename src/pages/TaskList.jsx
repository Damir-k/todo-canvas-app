import React from 'react';
import {AddTask} from '../components/AddTask';
import {DeleteAll} from '../components/DeleteAll';
import {TaskItemList} from '../components/TaskItemList';


export const TaskList = (props) => {
  const { items, onAdd, onDone, onDelete, onDeleteAll } = props;
  return (
    <main className="container">
      <AddTask
        onAdd = { onAdd }
      />
      <DeleteAll
        onDeleteAll = { onDeleteAll }
      />
      <TaskItemList
        items  = { items }
        onDone = { onDone }
        onDelete = { onDelete }
      />
    </main>
  )
}
