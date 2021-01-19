import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import promiseMW from 'redux-promise'
import reducers from './reducers'
import Home from './components/home'
import CarDetails from './containers/car-details'
import NotFound from './components/not-found'
const createStoreWithMW = applyMiddleware(promiseMW)(createStore)
const App = () => {

    return (
        <Provider store={createStoreWithMW(reducers)}>
            <Router>
                <Link to="/"><h1 className="alert alert-heading text-center">Cars Demo</h1></Link>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/cars/:id" component={CarDetails} />
                                <Route path="*" component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        </Provider>
    )
}

export default App;


// action 
// middleware 
// reducers
// store
