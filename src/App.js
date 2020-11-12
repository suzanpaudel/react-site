import './tailwind.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import HelloWorld from './component/HelloWorld';
import Counter from './component/Counter';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <Header />
      <HelloWorld name='Sujan' />
      <Switch>
        <Route exact path='/'>
          <h1 className='font-bold text-2xl'>This is the home page</h1>
        </Route>
        <Route path='/about'>
          <h1 className='font-bold text-2xl'>About Us Page</h1>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
