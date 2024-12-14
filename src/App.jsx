import "./App.css";
import CounterView from "./features/counter/CounterView";
import PostsView from "./features/posts/PostsView";

const App = () => {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <CounterView />
      <PostsView/>
    </div>
  );
};

export default App;
