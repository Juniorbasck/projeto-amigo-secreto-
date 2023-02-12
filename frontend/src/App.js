import GlobalStyle from "./styles/Global"
import styled from "styled-components";
import { tost, toastContainer } from "react-toastify";
import "react-toastify/dist/react-toastify.css"

const Container = styled.div`
   with: 100%;
   max-width: 800; 
   margin-to: 20px; 
   display: flex; 
`;

function App() {
  return (
    <div className="App">
        <>
          <Container>

          </Container>
          <toastContainer autoClose={3000} position={tost.POSITION.BOTTOM_LEFT}/>
          <GlobalStyle/>
        </>
    </div>
  );
}

export default App;
