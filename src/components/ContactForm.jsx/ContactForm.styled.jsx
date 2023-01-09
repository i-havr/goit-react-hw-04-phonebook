import styled from 'styled-components';

export const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  min-width: 80px;
  /* height: 80px; */
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid #32a1ce;
  border-radius: 5px;
  padding: 10px 20px 10px 20px;
`;

export const LabelInputStyled = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
`;
