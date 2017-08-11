import React, { Component } from 'react';
import TabsRouter from './Routers/TabsRouter';
import MainStackRouter from './Routers/MainStackRouter';

class App extends Component {
    render(){
        return <MainStackRouter />;
    }
}
export default App;