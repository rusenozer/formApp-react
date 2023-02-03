import "../Form.css"

export default function Button(props){
    function handleForm(e)
{   

    e.preventDefault()
    props.handleClick()
}
    return <button onClick={handleForm}>{props.children}</button>
}