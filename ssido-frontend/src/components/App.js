import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home,Form,NotFoundPage } from 'pages';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/form" component={Form}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    );
};

export default App;