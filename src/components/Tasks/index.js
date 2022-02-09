import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Tasks.css';

export default function Tasks({ handleEdit, handleDelete, tasks }) {
  return (
    <ul className="tasks">
      { tasks.map((task, index) => (
        <li key={task}>
          {task}
          <span>
            <FaEdit
              className="btn edit"
              onClick={(e) => handleEdit(e, index)}
            />
            <FaWindowClose
              className="btn delete"
              onClick={(e) => handleDelete(e, index)}
            />
          </span>
        </li>
      )) }
    </ul>
  );
}

Tasks.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
