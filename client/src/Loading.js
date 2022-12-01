import styled from "styled-components";

const Loading= () => {
  return (
    <Div>
    <div className="ring">Loading</div>
    <span></span>
  </Div>  
  )
}
export default Loading
const Div=styled.div`
  margin:0;
  padding:0;

.ring
{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:150px;
  height:150px;
  background:transparent;
  border:3px solid #023f05;
  border-radius:50%;
  text-align:center;
  line-height:150px;
  font-size:1.3rem;
  color:#DAA520;
  letter-spacing:4px;
  text-transform:uppercase;
  text-shadow:0 0 10px #DAA520;
  box-shadow:0 0 20px rgba(0,0,0,.5);
}
.ring:before
{
  content:'';
  position:absolute;
  top:-3px;
  left:-3px;
  width:100%;
  height:100%;
  border:3px solid transparent;
  border-top:3px solid #DAA520;
  border-right:3px solid #DAA520;
  border-radius:50%;
  animation:animateC 2s linear infinite;
}
span
{
  display:block;
  position:absolute;
  top:calc(50% - 2px);
  left:50%;
  width:50%;
  height:4px;
  background:transparent;
  transform-origin:left;
  animation:animate 2s linear infinite;
}
span:before
{
  content:'';
  position:absolute;
  width:16px;
  height:16px;
  border-radius:50%;
  background:#DAA520;
  top:-6px;
  right:-8px;
  box-shadow:0 0 20px #fff000;
}
@keyframes animateC
{
  0%
  {
    transform:rotate(0deg);
  }
  100%
  {
    transform:rotate(360deg);
  }
}
@keyframes animate
{
  0%
  {
    transform:rotate(45deg);
  }
  100%
  {
    transform:rotate(405deg);
  }
}
`