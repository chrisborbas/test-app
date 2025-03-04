'use client';

import { useState, useEffect } from 'react';
import { Todo } from '@/types/todo';

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch('/api/todos');
    const data = await response.json();
    setTodos(data);
  };

  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTodo }),
    });

    setNewTodo('');
    fetchTodos();
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Todo List</h1>
      <form onSubmit={addTodo} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          style={{
            padding: '0.5rem',
            border: '1px solid #ccc',
            borderRadius: '0.25rem',
            marginRight: '0.5rem'
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
            cursor: 'pointer'
          }}
        >
          Add
        </button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              padding: '0.5rem',
              border: '1px solid #eee',
              marginBottom: '0.5rem',
              borderRadius: '0.25rem'
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
} 