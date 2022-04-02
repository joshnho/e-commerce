import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
`;

export const FormToggle = styled.span`
  align-self: flex-end;

  &:hover {
    cursor: pointer;
  }
`;
