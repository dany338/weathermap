import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  margin-bottom: 40px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #fff;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04);
  transition: transform .2s ease-in-out,box-shadow .2s ease-in-out,-webkit-transform .2s ease-in-out;
  border-radius: 7px;

  .weather__thumbnail {
    height: 200px;
    width: 600px;
    border-radius: 7px 7px 0 0;
    background-position: 50%;
    background-size: cover;
    border-radius: 7px 7px 0 0;
  }

  .weather__info {
    display: flex;
    margin-top: 10px;
    padding-right: 30px;
  }

  .weather__map {
    display: flex;
    margin-top: 10px;
    padding-right: 30px;
  }

  .weather__text {
    margin-left: 15px;
  }

  .weather__text > h4 {
    font-size: 14px;
    margin-bottom: 5px;
  }

  .weather__text > p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    font-size: 14px;
    color: gray;
  }

  .weather__text > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    font-size: 14px;
    color: gray;
  }

  .weather__avatar {
    height: 30px !important;
    width: 30px !important;
    border-radius: 50%;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 25px 50px -12px rgba(0,0,0,.25);
    cursor: pointer;
  }
`;

export default Container;
