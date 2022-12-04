import styled from "styled-components"
import { Link } from "react-router-dom"
const SneakerCard= ({item}) => {
  return (
    <Card>
    <Link to={`/getSneaker/${item._id}`}>
      <ShoeImage src={item.shoeURL} alt={item.name}/>
      </Link>
      <ShoeName>{item.name}</ShoeName>
    </Card>
  )
}
export default SneakerCard

const Card=styled.div`
display: flex;
  flex-direction: column;
  width: 250px;
  height: 275px;
  align-items: center;
  text-align: center;
  margin-bottom:20px;
  &:hover {
    transform: scale(1.1);
    transition: .6s;
  }
  `
  const ShoeName = styled.p`
  margin: 20px 0 30px 0;
  height: 30px;
  font-size: 22px;
  color: white;
  font-family: "futura-pt-condensed", sans-serif; 
  font-weight: 600;
  text-shadow:
      0 0 7px #fff,
      /* 0 0 10px #fff, */
      /* 0 0 21px #fff, */
      0 0 42px #21ebff,
      /* 0 0 82px #21ebff, */
      /* 0 0 92px #21ebff,
      0 0 100px #21ebff, */
      0 0 151px #21ebff;
      -webkit-text-stroke: 1px lightgrey;
`;
const ShoeImage = styled.img`
  width: 250px;
  height: 200px;
  opacity: 0.9;
  border-radius: 10px 10px 0 0;
`;