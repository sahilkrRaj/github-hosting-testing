import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message>
          Hello,there i am live!
        </Message>
      </header>
    </div>
  );
}

export default App;

const Message=styled.div`
    color: #ffffff;
    font-size: 30px;
    font-weight: bold;
    font-family: monospace;
`
