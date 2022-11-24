import styled from "styled-components";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

const SneakerDetails = () => {
  const { _id } = useParams();
  const [item, setItem] = useState();
  const [newComment, setNewComment] = useState("");
  const [comment, setComment] = useState(false);
  const [existingComments, setExistingComments] = useState([]);


  console.log("existingComments", existingComments);
  useEffect(() => {
    fetch(`/getSneaker/${_id}`)
      .then((res) => res.json())
      .then((data) => setItem(data.data))
      .catch((err) => console.log(err));
  }, [_id]);


  useEffect(() => {
    fetch(`/getAllComments/${_id}`)
      .then((res) => res.json())
      .then((data) => { console.log("here", data) })
      .catch((err) => console.log(err));
  }, [_id]);

  const handleCreateComment = () => {
    console.log(newComment)
    fetch(`/createComment`, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ newComment, _id })

    })
      .then((res) => res.json())
      .then((data) => {
        setComment(!comment);
        setNewComment("");
      })
      .catch((err) => console.log(err));
  }
  const handleChange = (e) => {
    setNewComment(e.target.value);
  }
  return (
    <Div>
      {console.log(item)}
      {item ? (
        <BigWrapper>
          <Wrapper>
            <div>
              <img src={item.shoeURL} alt={item.name} />
            </div>
            <ShoeInfo>
              <div>{item.name}</div>
              <div>{item.year}</div>
              <div>{item.category}</div>
              <div>{item.description}</div>
            </ShoeInfo>
          </Wrapper>
          <div className="textBox">
            <textarea
              id="text"
              name="text"
              rows="5"
              cols="40"
              value={newComment}
              placeholder="What's your opinion?"
              onChange={handleChange}
            ></textarea>
            <button onClick={handleCreateComment}>Submit</button>
            <button className="cloudinary-button">Upload Pictures</button>
          </div>
        </BigWrapper>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </Div>
  )
}
export default SneakerDetails

const BigWrapper = styled.div`
.textBox{
  position: relative;
    width: 500px;
    height: 150px;
    /* border: 1px solid #ddd; */
  }
  textarea {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    position: relative;
    border: none;
    width: 500px;
    height: 95px;
    resize: none;
    outline: none;
  }
  `

const Div = styled.div`
  height: 100vh;
  /* font-family: Arial, Helvetica, sans-serif; */
  background: #f0ead6;
  display: flex;
  justify-content: center;
  align-items: center;
  `
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 500px 500px;
  justify-content: center;
  align-items: center;
  img {
    height: 375px;
    width: 375px;
    border-radius: 8px;
    margin-bottom: 20px;
    margin-top: 50px;
    /* box-shadow: 0 0 8px 8px white inset; */
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }

  `
const ShoeInfo = styled.div`
  width: 300px;
  `