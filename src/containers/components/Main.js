import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";

import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import ActionCompareArrows from 'material-ui/svg-icons/action/compare-arrows';
import CircularProgress from 'material-ui/CircularProgress';
import Divider from 'material-ui/Divider';
import Snackbar from 'material-ui/Snackbar';

import {discover_data, discover_movi_data} from "../actions/moviActions.js"
import {response} from "../../dummy_api/discover_list.js";
import CompareList from './CompareList.js'

@connect((store) => {
  return {
    moviList: store.movieReducer.moviList
  }
})


export default class Main extends React.Component{
  
  state={
    count:0,
    compareArr:[],
    openDialog:false,
    isSnackbaropen:false
  }

  componentDidMount(){
    var m=()=>{
      this.props.dispatch(discover_data(response));
    }
    window.setTimeout(m,1200)

    this.props.dispatch(discover_movi_data());
  }

   handleRequestClose = () => {
    this.setState({
      isSnackbaropen: false,
    });
  };

  handleChange=(e,data, id)=> {
    var ids = document.getElementById(id);
    if (ids.checked){
        if(this.state.count<2){
          this.state.compareArr.push(data)
          this.setState(this.state)

          this.setState({count:this.state.count+1})
        }          
     }else{
        this.state.compareArr.map((row,index)=>{
          if(data.Id == row.Id){
            this.state.compareArr.splice(index,1)
            this.setState(this.state)
          }
        })
        this.setState({count:this.state.count-1})
     }

     console.log(this.state.compareArr)

     if(this.state.count>1 && ids.checked){
       ids.checked = false
       this.setState({isSnackbaropen:true})
     }
  }

  handleClick=()=>{
    this.setState({openDialog:!this.state.openDialog})
  }

  render(){
    if(this.props.moviList.length>0){
      
      function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const rankA = parseInt(a.Rank);
        const rankB = parseInt(b.Rank);

        let comparison = 0;
        if (rankA > rankB) {
          comparison = 1;
        } else if (rankA < rankB) {
          comparison = -1;
        }
        return comparison;
      }

      this.props.moviList.sort(compare);
    }
    //console.log(this.props.moviList)
    var topTenItems = this.props.moviList.slice(0,10)
    console.log(topTenItems)
    return (
      <div className='container'>
        <List style={{width:900,margin:'0 auto'}}>  
        {
          (this.props.moviList.length>0)
          ?
          topTenItems.map((row,index)=>{
            return(
              <div>
            <ListItem
              key={index}
              leftAvatar={<Avatar>{row.Name.charAt(0)}</Avatar>}
              primaryText={<span>#{row.Rank} <strong>{row.Name}<br/></strong></span>}
              secondaryText={
                <span>
                  Duration: {row.Duration}<br />
                  Director: {row.Director}
                </span>
              }
              rightIcon={
                <label for={index} className="chkLabel">
                  <input value="1" onClick={(e)=>this.handleChange(e,row, index)} id={index} type="checkbox"  />
                  <span className="checkmark"></span>
                </label>
              }
            />
            <Divider inset={true} /> 
            </div> 
            )
          })
          :
          <div className='loading'><CircularProgress size={60} thickness={5} /></div>
        }
        </List>
        {
          (this.state.count==2)&&
          <RaisedButton
            className='button'
            label="Compare"
            primary={true}
            onClick={this.handleClick}
            icon={<ActionCompareArrows />}
          />
        }
        
          <Snackbar
          open={this.state.isSnackbaropen}
          message="Please pick only two items for comparison"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
        
        {
          this.state.openDialog&&
          <CompareList open={this.state.openDialog} handleClick={this.handleClick} compareArr={this.state.compareArr} />
        }
      </div>
    )
  }
}
