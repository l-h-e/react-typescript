import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import Todo from './containers/Todo';
import store from './modules/store';

const Fragment = React.Fragment

interface Todo{

}

class App extends Component {
    render(){
        return(
            <Fragment>
            <Provider store={store}><Todo /></Provider>
            <p>あああ</p>
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
