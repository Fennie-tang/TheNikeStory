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
  box-shadow: 0 0 10px gray;
  border-radius: 8px;
  align-items: center;
  text-align: center;
  `
  const ShoeName = styled.p`
  margin: 20px 0 30px 0;
  height: 30px;
  font-size: 18px;
  /* font-weight: bold; */
  color: #484848;
`;
const ShoeImage = styled.img`
  width: 250px;
  height: 200px;
  opacity: 0.9;
  border-radius: 10px 10px 0 0;
`;