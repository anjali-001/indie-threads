import react from 'react'

const InputField = (props) => {

    return(
        <>
        <label>{props.name}</label>
        <input type="text"
            autoFocus
            required
            onChange={(e) => props.setField(e.target.value)}
        />
        </>
    )
}

export default InputField