import React from 'react';
import AppBar from 'material-ui/AppBar';
import Main from "./components/Main.js";

const Root = () => (

  <div>
  	<AppBar
  		style={{position:'fixed',width:'100%',top:0,left:0}}
	    title="Top 10 Movies List"
	    iconClassNameRight="muidocs-icon-navigation-expand-more"
  	/>
  	<img src='../../images/banner.jpg' style={{width:'100%'}} />
  	<Main />

  </div>
)

export default Root
