import styled from 'styled-components';

export const ContainerDiv = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
`;

export const ContainerIn = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Heading = styled.h2`
  text-align: center;
`;

export const FavouriteLink = styled.p`
  text-align: right;
  padding-right: 20px;
  cursor: pointer;
  text-decoration: underline;
  color: #000;
`;
export const ResetLink = styled.p`
  text-align: right;
  padding-right: 0px;
  cursor: pointer;
  text-decoration: underline;
  color: #000;
`;


export const ContentDiv = styled.div`
  flex: 1 0 21%; /* explanation below */
  margin: 5px;
  background-color: #f1f1f1;
// margin: 10px;
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
`;

export const ItemDiv = styled.div`
  line-height: 25px;
  font-size: 12px;
`;

export const AnchorDiv = styled.div`
  text-decoration: underline;
  color: #000;
  cursor: pointer;
 font-size: 12px;
  font-weight: 5px;
  padding-bottom: 5px;
`;

export const AddedDiv = styled.div`
  color: red;
  font-size: 14px;
  padding-bottom: 10px;
`;


export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
`;

export const CardItem = styled.div`
  flex: 0 0 500px;
  margin: 10px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
`;

export const CardImg = styled.img`
  max-width: 100%;
`;
export const ItemImg = styled.img`
  max-width: 220px;
`;

export const CardContent = styled.div`
  padding: 0 20px 20px;
  & h3 {
    text-align: center;
  }
  & a{
    background: green;
    border: 0;
    color: white;
    padding: 10px;
    text-align: center;
    display: block;
    margin-bottom: 10px;
    text-decoration: none;
  }
  & button {
    background: green;
    border: 0;
    color: white;
    padding: 10px;
    text-align: center;
    display: block;
    font-size: 16px;
    width: 100%;
    outline: 0;
    cursor: pointer;
  }
`;

