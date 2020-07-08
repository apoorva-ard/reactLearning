import React, { Component } from 'react';
import Main from './Components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import { Provider } from 'react-redux';
//The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Main />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}
export default App;
//if we export as default no need to specify paranthesis while importing