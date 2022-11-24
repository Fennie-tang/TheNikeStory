import styled from "styled-components"
import SneakerCard from "./SneakerCard"
import { useState, useEffect } from "react";

const Homepage = ()=> {
  const [allShoes, setAllShoes] = useState();

  useEffect(() => {
    fetch(`/getAllSneakers`)
      .then((res) => res.json())
      .then((data) => setAllShoes(data.data))
      .catch((err) => console.log(err));
  }, );
  return(
    <>
    {allShoes ? (
          <ShoeGrid>
            {allShoes.map((allShoe) => {
              return <SneakerCard key={allShoe._id} item={allShoe} />;
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