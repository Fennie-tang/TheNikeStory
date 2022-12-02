import styled from "styled-components"
import SneakerCard from "./SneakerCard"
import { useState, useEffect } from "react";
import background from "./assets/background.jpeg"
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Loading";
// import background from "./assets/NeonStreets"

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
      {/* <BackgroundImg src={background}/> */}
      {allShoes ? (
        <ShoeGrid>
          {allShoes.map((allShoe) => {
            return <SneakerCard key={allShoe._id} item={allShoe} />
          })}
        </ShoeGrid>
      ) : (
        <Loading/> 
      )}
      </StyledDiv>
    </>
  )
}

export default Homepage

const StyledDiv=styled.div`
background-image:url("/NeonStreets.jpg");
/* background-image:url("/street.jpeg"); */
background-size: cover;
margin:0;
`

// const BackgroundImg=styled.img`
// width:100%;
// `

const ShoeGrid = styled.div`
  padding-top: 50px;
  display: grid;
  grid-template-columns: 275px 275px 275px ;
  justify-content: center;
  gap: 45px;
  /* margin-bottom: 30px; */
`;


