import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const TodoList = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const mount = useRef();

  const onDelete = (id) => {
    setList((preList) => preList.reduce((acc, cur) => (cur.id === id ? acc : [...acc, cur]), []));
  };

  const onCompleted = (id) => {
    setList((preList) =>
      preList.map((item) => (item.id === id ? { ...item, isCompleted: !item.isCompleted } : item))
    );
  };

  useEffect(() => {
    if (!mount.current) {
      mount.current = true;
      let Storage = localStorage.getItem('TodoList');
      if (Storage) setList(JSON.parse(Storage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('TodoList', JSON.stringify(list));
  }, [list]);

  return (
    <div className={styles.TodoList}>
      <h1>TodoList</h1>
      <div className={styles.form}>
        <input
          type="text"
          className={styles.input}
          value={value}
          placeholder="Enter your todo"
          autoComplete="off"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.keyCode === 13 && value.length > 0) {
              setList((preList) => [
                { text: value, id: new Date().getTime(), isCompleted: false },
                ...preList,
              ]);
              setValue('');
            }
          }}
        />

        <ul className={styles['todo-list']}>
          {list.map(({ text, id, isCompleted }) => (
            <li
              key={id}
              className={classNames({ [styles.completed]: isCompleted })}
              onClick={() => {
                onCompleted(id);
              }}
              onContextMenu={(e) => {
                e.preventDefault();
                onDelete(id);
              }}
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
      <small>
        Left click to toggle completed. <br /> Right click to delete todo
      </small>
    </div>
  );
};

export default TodoList;
