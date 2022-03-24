import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages'
import SignIn from './components/Signin/SignIn';
// import NavBar from './components/Navbar';
import mainComment from './Comment/UseEx';
function App() {


    return (
        <div className="App">
            <Router>
                {/* <NavBar/> */}
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    {/* <Route path='/home' exact component={HeroSection} /> */}
                    <Route path='/signin' exact component={SignIn} />
                    <Route path='/comment' exact component={mainComment} />

                </Switch>
                                
            </Router>
            
        </div>
    );
}

export default App;
