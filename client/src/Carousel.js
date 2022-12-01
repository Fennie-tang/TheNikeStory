import styled from "styled-components"
const Carousel= () => {
  return (
    <Div>
      <div className="gallery">
      <img
        src="https://images.unsplash.com/photo-1626947346165-4c2288dadc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="booth"
      />
      <img
        src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        alt="white sneaker"
      />
      <img
        src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        alt="green nike"
      />
      <img
        src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=831&q=80"
        alt="white air force"
      />
      <img
      src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlf"
      alt=""
    />
      <img
        src="https://images.unsplash.com/photo-1576672843344-f01907a9d40c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxLMzFhSnB6bXVId3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt=""
      />
   
    </div>
    </Div>
  )
}
export default Carousel

const Div=styled.div`
 margin: 0;
    min-height: 100vh;
    display: grid;
    place-content: center;
    background: grey;
    overflow: hidden;
    .gallery {
    --s: 150px; 
    display: grid;
    transform-style: preserve-3d;
    animation: rotate 15s linear infinite;
    position: relative;
  }
  @keyframes rotate {
    0% {transform: perspective(450px) rotateX(-100deg) rotate(0deg)}
    to {transform: perspective(450px) rotateX(-100deg) rotate(-360deg)}
  }
  .gallery > img {
    grid-area: 1/1;
    width: var(--s);
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
    transform: rotate(var(--_a)) translateY(120%) rotateX(90deg);
  }
  .gallery > img:nth-child(1) {--_a: 0deg}
  .gallery > img:nth-child(2) {--_a: 60deg}
  .gallery > img:nth-child(3) {--_a: 120deg}
  .gallery > img:nth-child(4) {--_a: 180deg}
  .gallery > img:nth-child(5) {--_a: 240deg}
  .gallery > img:nth-child(6) {--_a: 300deg}
  
  .gallery::before {
    content: "";
    position: absolute;
    inset: -100%;
    clip-path: polygon(50% 0,calc(50% + .866*50%) 25%,calc(50% + .866*50%) 75%,50% 100%,calc(50% - .866*50%) 75%,calc(50% - .866*50%) 25%);
    background: #33555b;
    transform: translateZ(calc(var(--s)/2)) rotate(90deg);
  }
`