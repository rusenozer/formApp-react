import "../Form.css"

export default function Form(props){

    return(
        <form className="form">
             {props.children}
        </form>
    )
}