import { useState } from "react"
import PropTypes from "prop-types"

//export const Input = ({ setContents }) => {
    export const Input = ({ onAddTask }) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = ({ target}) => {
         setInputValue(target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        onAddTask(inputValue)
      
      
        // const newContent = {
         //   name: inputValue,
           // seen: false
        //}
        //setContents(contents => [...contents, newContent])
        setInputValue('')
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Ingresa un contenido nuevo"
                value={inputValue}
                onChange={handleChange}
            />

        </form>
    )
}

Input.propTypes = {
   // setContents: PropTypes.func.isRequired
   onAddTask: PropTypes.func.isRequired
}



