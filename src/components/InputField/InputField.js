import react from 'react'

const InputField = (props) => {

    return(
        <>
        <label>{props.name}</label>
        <input type="text"
            required
            autoFocus={props.autofocus}
            onChange={(e) => props.setField(e.target.value)}
        />
        </>
    )
}

export default InputField