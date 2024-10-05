# Todo List Application Documentation

This document serves as a guide for understanding the React-based Todo List application. The application allows users to add, view, filter, toggle, and delete tasks. This project also includes features for persisting data locally using `localStorage`.

## Table of Contents
- [Setup and Installation](#setup-and-installation)
- [Component Structure](#component-structure)
- [State Management](#state-management)
- [LocalStorage Integration](#localstorage-integration)
- [Components Overview](#components-overview)
- [Adding New Todos](#adding-new-todos)
- [Filtering Todos](#filtering-todos)
- [Toggling and Deleting Todos](#toggling-and-deleting-todos)
- [Styling](#styling)
- [Improvements](#improvements)

## Setup and Installation
1. Clone the repository.
2. Navigate to the project folder.
3. Run the following command to install dependencies:
    ```
    npm install
    ```
4. Start the application using:
    ```
    npm start
    ```

## Component Structure
The application consists of a main `App` component that manages the entire Todo List state. Here’s the component structure:

- **App**
  - `AddTodoForm`: Contains the input and button for adding new todos.
  - `FilterContainer`: Contains buttons to filter between *All*, *Active*, and *Completed* todos.
  - `TodoList`: Displays the list of todos.
  - `TodoItem`: Represents each individual todo with actions to toggle or delete.

## State Management
The application uses React's `useState` and `useEffect` hooks to manage state:

1. **State Variables:**
   - `todos`: Array of todo objects.
   - `inputValue`: String for capturing the input value.
   - `filter`: String indicating the current filter option (`all`, `active`, or `completed`).

2. **State Operations:**
   - **Add Todo**: Adds a new todo item to the `todos` array.
   - **Toggle Todo**: Toggles the `completed` status of a todo.
   - **Delete Todo**: Removes a todo item based on its ID.
   - **Filter Todos**: Filters the todo items based on the current `filter` state.

## LocalStorage Integration
The application integrates with `localStorage` to persist todos:

- **Retrieving Todos**: On component mount, the application loads any stored todos from `localStorage`.
- **Storing Todos**: Whenever the `todos` state changes, the application updates the local `todos` in `localStorage`.

The relevant hooks are:

```javascript
useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem('todos'));
  if (storedTodos) {
    setTodos(storedTodos);
  }
}, []);

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);
```

## Components Overview

### 1. `App` Component
The main component that holds and manages the state and renders the UI for the todo list.

### 2. `AddTodoForm` Component
This component includes:
- An input field for the new todo text.
- An "Add" button to submit the new todo.

### 3. `FilterContainer` Component
A set of buttons (`All`, `Active`, `Completed`) for changing the `filter` state and displaying different subsets of todos.

### 4. `TodoList` Component
This component maps through the `filteredTodos` array and renders each item using the `TodoItem` component.

### 5. `TodoItem` Component
Represents a single todo with:
- The todo text.
- A click-to-toggle feature that marks a todo as complete or incomplete.
- A "Delete" button to remove the todo.

## Adding New Todos
- Users can type a new todo in the input field.
- When the "Add" button is clicked, the `addTodo` function adds a new todo item to the `todos` state with a unique `id`, the entered `text`, and `completed` status set to `false`.

```javascript
const addTodo = () => {
  if (inputValue.trim() !== '') {
    setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue('');
  }
};
```

## Filtering Todos
The `FilterContainer` component has three buttons: *All*, *Active*, and *Completed*. The `filteredTodos` variable is calculated based on the current `filter` state:

```javascript
const filteredTodos = todos.filter((todo) => {
  if (filter === 'active') return !todo.completed;
  if (filter === 'completed') return todo.completed;
  return true;
});
```

## Toggling and Deleting Todos

### Toggling Todos
When a todo is clicked, the `toggleTodo` function inverts its `completed` status:

```javascript
const toggleTodo = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};
```

### Deleting Todos
The "Delete" button removes a todo by filtering it out of the `todos` state:

```javascript
const deleteTodo = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};
```

## Styling
The application uses `styled-components` for styling. Each component is styled using a separate styled-component:

- `AppContainer`: Defines the layout and basic styles.
- `Title`: Styles the main heading.
- `AddTodoForm`, `Input`, `Button`: Style the input field and add button.
- `FilterContainer`, `FilterButton`: Style for filter buttons.
- `TodoList`, `TodoItem`: Style for the list and individual todo items.

## Improvements
Possible improvements include:
1. **Editing Todos**: Add the functionality to edit an existing todo.
2. **Priority Levels**: Add priority levels to each todo item.
3. **Animations**: Add animations for adding and deleting items.
4. **Theme Support**: Include light and dark mode toggles.

This documentation should provide a comprehensive overview of the functionality and code structure of the React Todo List Application.# Todo List Application Documentation

This document serves as a guide for understanding the React-based Todo List application. The application allows users to add, view, filter, toggle, and delete tasks. This project also includes features for persisting data locally using `localStorage`.

## Table of Contents
- [Setup and Installation](#setup-and-installation)
- [Component Structure](#component-structure)
- [State Management](#state-management)
- [LocalStorage Integration](#localstorage-integration)
- [Components Overview](#components-overview)
- [Adding New Todos](#adding-new-todos)
- [Filtering Todos](#filtering-todos)
- [Toggling and Deleting Todos](#toggling-and-deleting-todos)
- [Styling](#styling)
- [Improvements](#improvements)

## Setup and Installation
1. Clone the repository.
2. Navigate to the project folder.
3. Run the following command to install dependencies:
    ```
    npm install
    ```
4. Start the application using:
    ```
    npm start
    ```

## Component Structure
The application consists of a main `App` component that manages the entire Todo List state. Here’s the component structure:

- **App**
  - `AddTodoForm`: Contains the input and button for adding new todos.
  - `FilterContainer`: Contains buttons to filter between *All*, *Active*, and *Completed* todos.
  - `TodoList`: Displays the list of todos.
  - `TodoItem`: Represents each individual todo with actions to toggle or delete.

## State Management
The application uses React's `useState` and `useEffect` hooks to manage state:

1. **State Variables:**
   - `todos`: Array of todo objects.
   - `inputValue`: String for capturing the input value.
   - `filter`: String indicating the current filter option (`all`, `active`, or `completed`).

2. **State Operations:**
   - **Add Todo**: Adds a new todo item to the `todos` array.
   - **Toggle Todo**: Toggles the `completed` status of a todo.
   - **Delete Todo**: Removes a todo item based on its ID.
   - **Filter Todos**: Filters the todo items based on the current `filter` state.

## LocalStorage Integration
The application integrates with `localStorage` to persist todos:

- **Retrieving Todos**: On component mount, the application loads any stored todos from `localStorage`.
- **Storing Todos**: Whenever the `todos` state changes, the application updates the local `todos` in `localStorage`.

The relevant hooks are:

```javascript
useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem('todos'));
  if (storedTodos) {
    setTodos(storedTodos);
  }
}, []);

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);
```

## Components Overview

### 1. `App` Component
The main component that holds and manages the state and renders the UI for the todo list.

### 2. `AddTodoForm` Component
This component includes:
- An input field for the new todo text.
- An "Add" button to submit the new todo.

### 3. `FilterContainer` Component
A set of buttons (`All`, `Active`, `Completed`) for changing the `filter` state and displaying different subsets of todos.

### 4. `TodoList` Component
This component maps through the `filteredTodos` array and renders each item using the `TodoItem` component.

### 5. `TodoItem` Component
Represents a single todo with:
- The todo text.
- A click-to-toggle feature that marks a todo as complete or incomplete.
- A "Delete" button to remove the todo.

## Adding New Todos
- Users can type a new todo in the input field.
- When the "Add" button is clicked, the `addTodo` function adds a new todo item to the `todos` state with a unique `id`, the entered `text`, and `completed` status set to `false`.

```javascript
const addTodo = () => {
  if (inputValue.trim() !== '') {
    setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue('');
  }
};
```

## Filtering Todos
The `FilterContainer` component has three buttons: *All*, *Active*, and *Completed*. The `filteredTodos` variable is calculated based on the current `filter` state:

```javascript
const filteredTodos = todos.filter((todo) => {
  if (filter === 'active') return !todo.completed;
  if (filter === 'completed') return todo.completed;
  return true;
});
```

## Toggling and Deleting Todos

### Toggling Todos
When a todo is clicked, the `toggleTodo` function inverts its `completed` status:

```javascript
const toggleTodo = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};
```

### Deleting Todos
The "Delete" button removes a todo by filtering it out of the `todos` state:

```javascript
const deleteTodo = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};
```

## Styling
The application uses `styled-components` for styling. Each component is styled using a separate styled-component:

- `AppContainer`: Defines the layout and basic styles.
- `Title`: Styles the main heading.
- `AddTodoForm`, `Input`, `Button`: Style the input field and add button.
- `FilterContainer`, `FilterButton`: Style for filter buttons.
- `TodoList`, `TodoItem`: Style for the list and individual todo items.

## Improvements
Possible improvements include:
1. **Editing Todos**: Add the functionality to edit an existing todo.
2. **Priority Levels**: Add priority levels to each todo item.
3. **Animations**: Add animations for adding and deleting items.
4. **Theme Support**: Include light and dark mode toggles.

This documentation should provide a comprehensive overview of the functionality and code structure of the React Todo List Application.
