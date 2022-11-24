import styled from "styled-components"
import SneakerCard from "./SneakerCard"
const Homepage = (items)=> {
  return(
    <>
    {items ? (
          <ShoeGrid>
            {items.map((item) => {
              return <SneakerCard key={item._id} item={item} />;
            })}
          </ShoeGrid>
          ) : (
            <Loading>
              <p> Loading...</p>
            </Loading>
          )}
    </>
  )
}

export default Homepage

const ShoeGrid = styled.div`
  padding-top: 50px;
  display: grid;
  grid-template-columns: 250px 250px 250px 250px;
  justify-content: center;
  gap: 45px;
  margin-bottom: 30px;
`;

const Loading = styled.div`
  /* display: flex;
  justify-content: center;
  padding-top: 20vh;
  height: 80vh; */
`;