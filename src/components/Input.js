import "../Form.css"

export default function Input(props){
    function changeEvent(e){

        props.handleChange(e.target.value)
    }
    return(
        <div className="row">
            {props.children}
            {
                props.isEnable ? 
                <input type="number" onChange={changeEvent} value={props.deger}/>
                :
                <input type="text" disabled value={props.deger.toString()}/>

            }
        
        </div>
    )

}