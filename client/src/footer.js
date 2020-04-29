import React, {useEffect} from "react";

let initialized=false;

function Footer() {
	
 useEffect(() => {
    console.log("Footer: useEffect: FIRST RENDER");
},[]);	

 useEffect(() => {
	if(initialized) {
      console.log("Footer: useEffect EVERY RENDER")
    } else {
	  initialized=true
	}
});	


  return (
    <div>
      Ron's bookstore - CSC 435 - Concordia College 
    </div>
  );
}

export default Footer;