import React from 'react'
import PropTypes from "prop-types";

import Button from 'react-bootstrap/Button';
const Profile = (props) => {
  function HandleClick(e){
    e.preventDefault();
    alert(props.data.fullName)
  }
  return (

    <div>
    
<img src={props.children} alt="ph"  style={{borderRadius:"30%",width:"300px", marginTop:"80px" }} />
<h1 style={{background:"#eee" , marginTop:"50px"}}>{props.data.fullName}</h1>
<h1 style={{background:"#eee", marginTop:"50px"}}>{props.data.bio}</h1>
<h1 style={{background:"#eee",marginTop:"50px"}}>{props.data.profession}</h1>
<Button variant="warning" onClick={HandleClick} style={{marginTop:"50px"}}>Click</Button>{' '}
    </div>
  )
}
Profile.defaultProps={
data:{
fullName:"sara",
bio:"bio",
profession:"grafic design",
}

}

Profile.propTypes={
data:PropTypes.shape({
fullName:PropTypes.string,
bio:PropTypes.string,
profession:PropTypes.string,


})

}


export default Profile