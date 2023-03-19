import React ,{useState} from 'react'
import shortid from 'shortid'
import "./Form.css"
function Form(props) {
  const [value ,setValue] = useState("")
const changeValue =(e) =>{
setValue(e.target.value)

}
const submit = (e) =>{
  e.preventDefault()
  props.onsubmit({
    id:shortid.generate(),
    title:value,
    complete:false
  })
const erpmty =""
setValue(erpmty )
  
}

  return (
    <div>
      <form className='form' onSubmit={ submit}>
        <input type="text"  onChange={changeValue} placeholder="enter task"/>
        <button className='btn'type='submit'> add Task</button>
      </form>
    </div>
  )
}

export default Form