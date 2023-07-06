import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyComponent from './MyComponent/main';
import Test from './MyComponent/assets/components/test';
import { Navbar } from 'react-bootstrap';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>

  );
}


export default App;
