import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;


export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Grid = ({ users, setUsers, setOnEdit }) => {
    const handleEdit = (item) => {
      setOnEdit(item);
};


const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:5000/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

const Grid = ({ users }) => {
   
    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users.map((item, i) => (
                   <Tr key={i}>
                        <td width="30%">{item.nome}</td>
                        <td width="30%">{item.email}</td>
                        <td alignCenter width="5%">
                            <FaEdit onAbort={() => handleEdit(item)}/>
                        </td>
                        <Td alignCenter width="5%">
                            <FaEdit onClick={()  => handleDelete(item.id)}/>
                        </Td>
                     </Tr>
                ))}
            </tbody>
        </table>
    );
};

export default Grid; 










