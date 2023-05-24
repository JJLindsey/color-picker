import styled from 'styled-components'
import Picker from './Picker'
import {GlobalStyle} from './GlobalStyle'
import './App.css';

const Wrapper = styled.div`
height: 100vh;
display: grid;
align-items: center;
justify-items: center`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Wrapper>
        <Picker/>
      </Wrapper>
    </div>
  );
}

export default App;
