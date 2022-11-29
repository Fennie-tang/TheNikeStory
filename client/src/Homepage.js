import styled from "styled-components"
import SneakerCard from "./SneakerCard"
import { useState, useEffect } from "react";
import banner from "./assets/banner.jpeg"
import { useAuth0 } from "@auth0/auth0-react";

const Homepage = () => {
  const [allShoes, setAllShoes] = useState();
  const { loginWithRedirect, user } = useAuth0();

  useEffect(() => {
    fetch(`/getAllSneakers`)
      .then((res) => res.json())
      .then((data) => setAllShoes(data.data))
      .catch((err) => console.log(err));
  }, []);
  if (
    user
  ) {
    console.log(user)
  }

  return (
    <>
    <StyledDiv>
      <BannerImg src={banner}/>
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
      </StyledDiv>
    </>
  )
}

export default Homepage

const StyledDiv=styled.div``

const BannerImg=styled.img`
width:100%;
`

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