import { useState, useRef, useEffect } from 'react';
import { FaEdit, FaTrashAlt, FaPlus, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import classNames from 'classnames';

import styles from './style.module.scss';

const Note = ({ content, index, contentChange, contentDelete }) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(content);
  useEffect(() => {
    if (!content) setEdit(true);
  }, [content]);

  return (
    <div className={styles.note}>
      <div className={classNames(styles.tools, { [styles.edit]: edit })}>
        <button
          onClick={() => {
            setEdit(true);
          }}
        >
          <FaEdit />
        </button>
        <button
          onClick={() => {
            contentDelete(index);
          }}
        >
          <FaTrashAlt />
        </button>
      </div>
      <div className={classNames(styles.main, { [styles.hidden]: edit })}>
        <p>{content}</p>
      </div>
      <textarea
        value={text}
        className={classNames({ [styles.hidden]: !edit })}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>
      {edit && (
        <div className={styles.done}>
          <button
            onClick={() => {
              contentChange(text, index);
              setEdit(false);
            }}
          >
            <FaCheckCircle />
          </button>
          <button
            onClick={() => {
              setText(content);
              setEdit(false);
            }}
          >
            <FaTimesCircle />
          </button>
        </div>
      )}
    </div>
  );
};

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const mount = useRef();
  const contentChange = (content, i) => {
    setNotes((preNotes) =>
      preNotes.map((item, index) => (index === i ? { ...item, content } : item))
    );
  };

  const contentDelete = (i) => {
    setNotes((preNotes) =>
      preNotes.reduce((acc, cur, index) => (index === i ? acc : [...acc, cur]), [])
    );
  };

  useEffect(() => {
    if (!mount.current) {
      mount.current = true;
      const Storage = localStorage.getItem('NotesApps');
      if (Storage) setNotes(JSON.parse(Storage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('NotesApps', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={styles.NotesApp}>
      <button
        className={styles.add}
        onClick={() => {
          setNotes((preNotes) => [...preNotes, { content: '' }]);
        }}
      >
        <FaPlus /> Add note
      </button>
      {notes.map(({ content }, i) => (
        <Note
          key={i}
          index={i}
          content={content}
          contentChange={contentChange}
          contentDelete={contentDelete}
        />
      ))}
    </div>
  );
};

export default NotesApp;
