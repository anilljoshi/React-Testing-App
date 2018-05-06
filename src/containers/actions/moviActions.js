import axios from "axios";

export function discover_movi_data(){

  return function(dispatch){
    var config = {
        headers: {
          Accept: "application/json"
        }
    };
    axios.get('https://interview.zocdoc.com/api/1/FEE/AllMovies',{'authToken':'3b502b3f-b1ff-4128-bd99-626e74836d9c'}, config).then((response) =>{
          console.log(response)
          dispatch({type:'FETCHING_DATA'});
          dispatch({type:'TOP_MOVI_LIST', payload:response.data.data});
        })
        .catch((err) => {
          dispatch({type:'FETCHING_ERROR',payload:err})
        })
  }
}

export function discover_data(data){

  return function(dispatch){
        dispatch({type:'TOP_MOVI_LIST',payload:data})
    }
}
