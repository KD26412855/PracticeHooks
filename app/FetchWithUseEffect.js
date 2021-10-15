import React from 'react'
import ReactDOM from 'react-dom'
import "./styles.css";

function fetchReducer(state={},action){
  if(action.type=="loading"){
    return{
      ...state,
      loading:true
    }
  }else if(action.type=="success"){
    return {
      ...state,
      data:action.data,
      loading:false
    }
  }else if(aciton.type=="error"){
    return {
      ...state,
      error:'Error fetching data.Try again',
      loading:false
    }
  }else {
    throw new Error('That action type is not supported')
  }


}

const postIds=[1,2,3,4,5,6,7,8]
function fetchPost(id){
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.json())
}

export default function AppForUseEffect(){
  const[state,dispatch]=React.useReducer(fetchReducer,{loading:true, data:null,error:null})

  const [index, setIndex] = React.useState(0)
  //const [loading, setLoading] = React.useState(true)
  //const [error, setError] = React.useState(null)
  //const [post, setPost] = React.useState(null)

  React.useEffect(() => {

    dispatch({type:'loading'})

    // setLoading(true)

     fetchPost(postIds[index])
       .then((post) => {
         dispatch({type:'success', data:post})
         //setPost(post)
        // setError(null)
        // setLoading(false)
       })
       .catch((e) => {
         console.warn(e.message)
         dispatch({type:'error'})
        // setError('Error fetching data. Try again.')
        // setLoading(false)
       })
   }, [index])

   const incrementPostCounter = () => {
      setIndex((i) =>
        i === postIds.length - 1
          ? i
          : i + 1
      )
    }

  if(state.loading==true){
    return <p>Loading...</p>
  }
  if(state.error){
    return (
      <React.Fragment>
      <p>{errror}</p>
      <button onClikck={incrementPostCounter}>Next Post</button>
      </React.Fragment>
    )
  }

  return(
    <div className="App">
     <h1>{state.data.title}</h1>
     <p>{state.data.body}</p>
     {index === postIds.length - 1
       ? <p>No more posts</p>
       : <button onClick={incrementPostCounter}>
           Next Post
         </button>}
   </div>
  )
}
