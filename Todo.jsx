import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const AddTodoForm = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const FilterButton = styled(Button)`
  margin: 0 5px;
  background-color: ${props => props.active ? '#4CAF50' : '#f1f1f1'};
  color: ${props => props.active ? 'white' : 'black'};
`;

const TodoList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TodoItem = styled.li`
  background-color: #f9f9f9;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;

  ${props => props.completed && `
    text-decoration: line-through;
    opacity: 0.6;
  `}
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <AppContainer>
      <Title>Todo List</Title>
      <AddTodoForm>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a new todo"
        />
        <Button onClick={addTodo}>Add</Button>
      </AddTodoForm>
      <FilterContainer>
        <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>All</FilterButton>
        <FilterButton active={filter === 'active'} onClick={() => setFilter('active')}>Active</FilterButton>
        <FilterButton active={filter === 'completed'} onClick={() => setFilter('completed')}>Completed</FilterButton>
      </FilterContainer>
      <TodoList>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} completed={todo.completed}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
          </TodoItem>
        ))}
      </TodoList>
    </AppContainer>
  );
}

export default App;
