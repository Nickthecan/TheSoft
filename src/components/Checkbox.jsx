


const Checkbox = ( {id, nameForCheckBox} ) => {
    return(
        <>
            <input type="checkbox" id={id} />
            <label htmlFor={id}>{nameForCheckBox}</label><br/>
        </>
    );
}

export default Checkbox;