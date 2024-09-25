import "../styles/Checkbox.css"

const Checkbox = ( {id, nameForCheckBox} ) => {
    return(
        <>
            <div className="home">
                <div className="box-checkbox">
                    <input className="check" type="checkbox" id={id} />
                    <label htmlFor={id}>{nameForCheckBox}</label><br/>
                </div>
            </div>
        </>
    );
}

export default Checkbox;