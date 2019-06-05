import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoEntry from "./components/TodoEntry";
import ControlPanel from "./components/ControlPanel";

class App extends Component {
  state = {
    todos: [],
    id: 0, //id for the next todo
    currentTodo: "", //text of the current todo
    history: [], //array containing all of the past states in this user's session
    historyIndex: -1 //index of the state that we are currently at in history
  };
  //add new state to history array
  updateHistory = todos => {
    const { history, historyIndex } = this.state;
    this.setState({ history: [...history.slice(0, historyIndex + 1), todos], historyIndex: historyIndex + 1 });
  };
  //undo an action by iterating backwards through history array
  undo = () => {
    const { history, historyIndex } = this.state;
    if (historyIndex < 1) this.setState({ todos: [] });
    else this.setState({ todos: history[historyIndex - 1], historyIndex: historyIndex - 1 });
  };
  //redo an action by iterating forwards through history array
  redo = () => {
    const { history, historyIndex } = this.state;
    if (historyIndex < history.length - 1)
      this.setState({ todos: history[historyIndex + 1], historyIndex: historyIndex + 1 });
  };

  //handle existing todos
  updateTodos = updatedTodos => {
    this.setState({ todos: updatedTodos });
    this.updateHistory(updatedTodos);
  };
  //add todo
  handleTodoSubmit = () => {
    const { currentTodo, id, todos } = this.state; //destructure state object
    if (currentTodo === "") return; //if nothing has been entered, don't save
    const newTodo = { name: currentTodo, id: id, isDone: false, dueDate: undefined, type: "todo" };
    this.setState({ todos: [...todos, newTodo], id: id + 1, currentTodo: "" });
    this.updateHistory([...todos, newTodo]); //call function that will handle history for us
  };
  //delete todo
  handleTodoDeletion = todoId => this.updateTodos(this.state.todos.filter(todo => todo.id !== todoId));
  //toggle todo completion
  handleTodoDone = (todoId, isDone) =>
    this.updateTodos(this.state.todos.map(todo => (todo.id === todoId ? { ...todo, isDone: isDone } : todo)));
  //change due date
  handleDueDateChange = (date, todoId) =>
    this.updateTodos(this.state.todos.map(todo => (todo.id === todoId ? { ...todo, dueDate: date } : todo)));
  //sort alphabetically or by date
  sortAlphabetically = () =>
    this.updateTodos(this.state.todos.sort((todo1, todo2) => todo1.name.localeCompare(todo2.name)));
  sortByDate = () => this.updateTodos(this.state.todos.sort((todo1, todo2) => todo1.dueDate - todo2.dueDate));
  //clear all todos
  clearTodos = () => this.updateTodos([]);

  //create new folder
  addFolder = () => {
    const newFolder = { name: "Folder Name", todos: [], id: this.state.id, type: "folder", isExpanded: false };
    this.updateTodos([...this.state.todos, newFolder]);
    this.setState({ id: this.state.id + 1 });
  };
  //change name of folder
  handleChangeFolderName = (e, folderId) =>
    this.updateTodos(
      this.state.todos.map(folder => (folder.id === folderId ? { ...folder, name: e.target.value } : folder))
    );
  //open folder so that we can see contained todos
  expandFolder = folderId => {
    this.setState({
      todos: this.state.todos.map(
        folder => (folder.id === folderId ? { ...folder, isExpanded: !folder.isExpanded } : folder)
      )
    });
  };

  handleDragTodo = (e, todoId) => e.dataTransfer.setData("todoId", todoId);
  allowDrop = e => e.preventDefault();
  handleDrop = (e, folderId) => {
    e.preventDefault();
    const todoId = e.dataTransfer.getData("todoId");
    const draggedTodo = this.state.todos.find(todo => todo.id == todoId);
    this.updateTodos(
      this.state.todos.reduce((acc, todo) => {
        if (todo.id == todoId) return acc;
        if (todo.id == folderId) {
          return [...acc, { ...todo, todos: [...todo.todos, draggedTodo] }];
        } else return [...acc, todo];
      }, [])
    );
  };

  //export
  exportToCSV = () => {
    const header = "Description,Completed,Due Date\n";
    const body = this.state.todos.reduce(
      (acc, todo) => acc + `${todo.name},${todo.isDone},${todo.dueDate.toDateString()}\n`,
      ""
    );
    const csvContent = "data:text/csv;charset=utf-8," + header + body;
    window.open(encodeURI(csvContent));
  };

  //handle todo entry
  handleChange = e => this.setState({ currentTodo: e.target.value });

  render() {
    return (
      <div className="App">
        <ControlPanel redo={this.redo} undo={this.undo} clear={this.clearTodos} export={this.exportToCSV} />
        <h1>Todo List</h1>
        <TodoEntry addTodo={this.handleTodoSubmit} currentTodo={this.state.currentTodo} onChange={this.handleChange} />
        <TodoList
          todos={this.state.todos}
          deleteTodo={this.handleTodoDeletion}
          completeTodo={this.handleTodoDone}
          changeDueDate={this.handleDueDateChange}
          sortAlphabetically={this.sortAlphabetically}
          sortByDate={this.sortByDate}
          addFolder={this.addFolder}
          changeFolderName={this.handleChangeFolderName}
          dragTodo={this.handleDragTodo}
          allowDrop={this.allowDrop}
          onDrop={this.handleDrop}
          expandFolder={this.expandFolder}
        />
      </div>
    );
  }
}

export default App;
