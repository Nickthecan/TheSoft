import "../styles/Checkbox.css"

const Checkbox = ( {id, nameForCheckBox} ) => {
    return(
        <>
            <div className="box-checkbox">
                <input type="checkbox" id={id} />
                <label htmlFor={id}>{nameForCheckBox}</label><br/>
            </div>
        </>
    );
}

export default Checkbox;