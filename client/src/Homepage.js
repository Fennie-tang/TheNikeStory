import styled from "styled-components"
import { Link } from "react-router-dom"
import { BsFacebook } from "react-icons/bs"
import { AiFillTwitterCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"
import NikeVideo from "./assets/nikeEvolution.mp4"
const About = () => {
  return (
    <>
      <Div>
        <section className="showcase">
          <div className="video-container">
            <video src={NikeVideo} autoPlay loop muted />
          </div>
          <div class="content">
            <h1>The Nike Story</h1>
            <a href="#about" className="btn">Read More</a>
          </div>
        </section>

        <section id="about">
          <h1>The Beginning</h1>
          <p>
            Nike, Inc., formerly (1964-78) Blue Ribbon Sports, American sportswear company headquartered in Beaverton, Oregon. It was founded in 1964 as Blue Ribbon Sports by Bill Bowerman, a track-and-field coach at the University of Oregon, and his former student Phil Knight. They opened their first retail outlet in 1966 and launched the Nike brand shoe in 1972. The company was renamed Nike, Inc., in 1978 and went public two years later. By the early 21st century, Nike had retail outlets and distributors in more than 170 countries, and its logo—a curved check mark called the “swoosh”—was recognized throughout the world.
          </p>
<Link to="ShoePage">
<button className="button">Nike's 30 Iconic Shoes</button>
</Link>
          <h2>Follow Nike Social Media</h2>

          <div className="social">

            <Link to="https:www.facebook.com/nike/">
              <BsFacebook size="30" />
            </Link>
            <Link to="https:twitter.com/nike">
              <AiFillTwitterCircle size="30" />
            </Link>
            <Link to="https:www.instagram.com/nike">
              <AiFillInstagram size="32" />
            </Link>
            <Link to="https:www.youtube.com/@nike">
              <AiFillYoutube size="32" />
            </Link>
          </div>
        </section>
      </Div>
    </>
  )
}
export default About
const Div = styled.div`
/* box-sizing: border-box;
margin: 0;
padding: 0; */
font-family: "futura-pt-condensed", sans-serif; 
/* font-weight: 600; */
line-height: 1.5;
h1 {   
  font-family: "futura-pt-condensed", sans-serif; 
  font-weight: 300;
   font-size: 60px;
  line-height: 1.2;
  margin-bottom: 15px;
}
  a {
  text-decoration: none;
  color: var(--primary-color);
  }
  .button{
    margin: 20px;
    position: relative;
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    outline: 2px solid #21ebff;
    padding: 25px 50px;
    overflow: hidden;
    transition: color 1s;
    border: none;
    border-radius: 5px;
    background-color: #272b2e;
    font-weight:bold;
  }
  .button:hover{
    color:#090909;
   
  }
  .button::before{
    content:'';
    position: absolute;
    top:0;
    left:-50px;
    z-index:1;
    width: 150%;
    height: 100%;
    background-color: grey;
    transform: scaleX(0) skewX(35deg);
    transform-origin: left;
    transition: transform 1s;
   
  }
  .button:hover::before{
    transform:scaleX(1) skewX(35deg);
  }
  .showcase {
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   color: #fff;
   padding: 0 20px;
 }

 .video-container {
   position: absolute;
   /* top: 0; */
   left: 0;
   width: 100%;
   height: 100%;
   overflow: hidden;
   background: var(--primary-color) url('./https:traversymedia.com/downloads/cover.jpg') no-repeat center
     center/cover;
 }

 .video-container video {
   min-width: 100%;
   min-height: 100%;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   object-fit: cover;
 }

 .video-container:after {
   content: '';
   z-index: 1;
   height: 100%;
   width: 100%;
   top: 0;
   left: 0;
   background: rgba(0, 0, 0, 0.5);
   position: absolute;
 }

 .content {
   z-index: 2;
 }

 .btn {
   display: inline-block;
   padding: 10px 30px;
   background: var(--primary-color);
   color: #fff;
   border-radius: 5px;
   border: solid #fff 1px;
   margin-top: 25px;
   opacity: 0.7;
 }

 .btn:hover {
   transform: scale(0.98);
 }

 #about {
   padding: 40px;
   text-align: center;
  
 }

 #about p {
   font-size: 1.2rem;
   /* font-family: "futura-pt-condensed", sans-serif;  */
   max-width: 600px;
   margin: auto;
 }

 #about h2 {
   margin: 20px 0;
   color: var(--primary-color);
 }

 .social a {
   margin: 0 5px;
 
 }
`






