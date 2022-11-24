import styled from "styled-components";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

const sneakerDetails = ()=> {
  const {_id} = useParams
  const [item, setItem] = useState();

  useEffect(() => {
    fetch(`/getsneaker/${_id}`)
      .then((res) => res.json())
      .then((data) => setItem(data.data))
      .catch((err) => console.log(err));
  }, [id]);
  return(
    <>
    {item ? (
      <wrapper>
        <div>
        <img src={item.shoeURL} alt={item.name}/>
        </div>
        <div>{item.name}</div>
        <div>{item.description}</div>
        <div>{item.category}</div>

      </wrapper>
    ):(
      <div>
        <p>Loading...</p>
      </div>
    )}
    </>
  )
}

export default sneakerDetails