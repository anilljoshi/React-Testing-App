export default function reducer(state={
  moviList:[],
  error: null,
  loading:false,
}, action){
  switch (action.type) {
    case "FETCHING_DATA":{
      return {...state, loading: true}
    }
    case "TOP_MOVI_LIST":{
      return {...state, loading: false, moviList:action.payload}
    }
    default:{
      return {...state, error:action.payload, loading:false}
    }

  }
}
