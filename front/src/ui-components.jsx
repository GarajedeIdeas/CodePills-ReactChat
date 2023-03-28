import styled from 'styled-components';

const UlMensajes = styled.ul`
    max-width: 800px;
    margin: 10px auto;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const LiMensaje = styled.li`
    background-color: lightblue;
    border: 2px solid dodgerblue;
    padding: 10px 20px;
`

export {
    UlMensajes, LiMensaje
}