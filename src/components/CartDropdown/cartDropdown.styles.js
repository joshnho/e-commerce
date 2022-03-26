import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 25em;
  height: 50%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItems = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

//   .empty-message {
//     font-size: 18px;
//     margin: 50px auto;
//   }
//   }

//   button {
//     margin-top: auto;
//   }
// }
