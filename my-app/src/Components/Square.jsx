export const Square = (props) => {
    return (
        <>
            <div onClick={props.onClick} className="square" >
                <h1 className="character">{props.value}</h1>
            </div>
        </>
    )
}   