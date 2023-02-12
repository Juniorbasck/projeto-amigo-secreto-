import GlobalStyle from "./styles/Global"
import styled from "styled-components";
import Form from "./componets/form.js"
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import { tost, toastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
   with: 100%;
   max-width: 800; 
   margin-to: 20px; 
   display: flex; 
   fex-direction: column; 
   align-items: center
   gap: 10px;
`;

const Title = styled.h2``; 


function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit ] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

   return (
    <div className="App">
        <>
          <Container>

          </Container>
            <title>CADASTRO</title>
            <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={setOnEdit}/>
            <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit}/>
          <toastContainer autoClose={3000} position={tost.POSITION.BOTTOM_LEFT}/>
          <GlobalStyle/>
        </>
    </div>
  );
}

export default App;
