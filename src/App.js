import './App.css';
import TodoList from './components/TodoList';
import { Provider } from "react-redux";
import  {store}  from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <div className='todo-app'>
    <TodoList />
  </div>
  </Provider>
  );
}

export default App;
