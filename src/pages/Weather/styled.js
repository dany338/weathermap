import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid lightgray;
  flex: 0.8;
  background-color: #f9f9f9;
  padding: 40px 20px;
  padding-bottom: 0;

  @media only screen and (max-width: 601px) {
    flex: 1;
  }

  h2 {
    margin-left: 5px;
    margin-bottom: 20px;
  }

  .recommended__weather {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export default Container;
