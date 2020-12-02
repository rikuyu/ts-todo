import React from 'react';
import {Task} from "../Types";
import './App.css';

type Props = {
    task: Task
}

const App: React.FC<Props>=({task})=> {
  return (
    <li>
        <label>
            <input type="checkbox" className="checkbox-input"/>
            <span className="checkbox-label">
                {task.title}
            </span>
            <button className="btn is-delete">削除</button>
        </label>
    </li>
  );
}

export default App;
