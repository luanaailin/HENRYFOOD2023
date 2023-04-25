import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Homepage from './Components/HP/Homepage.jsx';
import Principal from './Components/MAIN/Main.jsx';
import {getRecipesBackend} from './Redux/actions.js';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesBackend())
  }, [dispatch])

  return (
    <div className="App">
      <Route exact path="/">
        <Homepage />
      </Route>

      <Route path="/recipes" 
             render={({history, location}) => <Principal history={history} location={location} />}/>

    </div>
  );
}

export default App;