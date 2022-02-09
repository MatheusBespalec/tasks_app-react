import React, { Component } from 'react';

import Form from './Form';
import Tasks from './Tasks';
import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if (!tasks) return;

    this.setState({ tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;

    if (tasks === prevState.tasks) return;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) != -1 || newTask == '') return;
    this.setState({
      tasks: [...tasks, newTask],
      newTask: '',
    });
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    const { tasks } = this.state;
    this.setState({
      newTask: tasks[index],
    });
    this.handleDelete(e, index);
  };

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    tasks.splice(index, 1);

    this.setState({
      tasks: [...tasks],
    });
  };

  render() {
    const { newTask, tasks } = this.state;
    return (
      <div className="main">
        <h2>Lista de tarefas</h2>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          newTask={newTask}
        />
        <Tasks
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          tasks={tasks}
        />
      </div>
    );
  }
}
