import React from 'react';
import './App.css';
import { Page } from './components/Page';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <title>Create LN App</title>
                <div>
                    Get Started with creating a full-stack App on the Lightning
                    Network.
                </div>
                <Page />
            </header>
        </div>
    );
}

export default App;
