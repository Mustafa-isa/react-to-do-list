import React,{useState} from 'react'
import Form from './component/Form'
import "./App.css"
function App() {
  let [arr ,setarr] =useState([])
  const [status ,setStatus] = useState("all")

  const getData = (data) =>{
setarr([data ,...arr])
  }
  console.log(arr)
  const deleteTask =(id) =>{
setarr(arr => arr.filter(el => el.id !== id))
  }
  function updateStata(s){
    setStatus(s)
  }
console.log(status)
if(status ==="compelete"){
  arr =arr.filter(el =>el.complete)
}
else if(status ==="active"){
  arr = arr.filter(el =>!el.complete)
}
else if(status ==='all'){
  arr = arr.filter(el =>el)
}
const toggle =function(id){
setarr(arr.map(el =>{
  if(el.id===id){
    return{
      ...el,
      complete: !el.complete
    }
  }
    else{
      return el
    }
    
  }))

}
  return (
    <div className="body">
      <div className="float"></div>
    <div className='container'>
      <Form onsubmit={getData}></Form>
      {arr.map(el => {
        if(el.title ===''){
          return ''
        }
      return(
    
      <div className='task'onClick={()=>{toggle(el.id)}} key={el.id} style={{textDecoration: el.complete ? "line-through" : ""}}>{el.title} <span onClick={() =>deleteTask(el.id)}>x</span></div>
    )})}
    <div className="btn-container">
      <button className='btn' onClick={()=>{updateStata("all")}}>all</button>
      <button className='btn' onClick={()=>{updateStata("active")}}>active</button>
      <button className='btn' onClick={()=>{updateStata("compelete")}}>compelete</button>
    </div>
    </div>
    </div> 
  )
}

export default App