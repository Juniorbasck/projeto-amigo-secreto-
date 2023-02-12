import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Label = styled.label``;

const Form = ({ onEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
          const user = ref.current;
    
          user.nome.value = onEdit.nome;
          user.email.value = onEdit.email;
        }
      }, [onEdit]);
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const user = ref.current;
        if (
            !user.nome.value ||
            !user.email.value 
          ) {
            return toast.warn("Preencha todos os campos!");
          }
      
          if (onEdit) {
            await axios
              .put("http://localhost:5000/" + onEdit.id, {
                nome: user.nome.value,
                email: user.email.value,
              })
              .then(({ data }) => toast.success(data))
              .catch(({ data }) => toast.error(data));
          } else {
            await axios
              .post("http://localhost:5000", {
                nome: user.nome.value,
                email: user.email.value,
              })
              .then(({ data }) => toast.success(data))
              .catch(({ data }) => toast.error(data));
          }
      
          user.nome.value = "";
          user.email.value = "";
      
          setOnEdit(null);
          getUsers();
        };
      

    return(
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <inputArea>
                <label>Nome</label>
                <input name="nome"/>
            </inputArea>
            <inputArea>
                <label>email</label>
                <input name="email" type="email"/>
            </inputArea>

            <button type="submit">SALVAR</button>
            <Button id="sortear" type="submi">SORTEAR</Button>
        </FormContainer>     
    );
};

export default Form; 