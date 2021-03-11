const inlineStyles = {
    backgroundColor: "teal",
    color: "white",
    fontWeight: "bold",
    padding: "10px",
    width: "50%",
    boxSizing: "border-box"
}

const titleStyles = {
    textTransform: "capitalize",
    textShadow: "2px 2px 4px gray"
}

const textStyles = {
    borderRadius: "5px",
    textDecoration: "underline"
}

const listStyles = {
    border:"2px solid gray",
    listStylePosition: "inside",
    listStyleType: "square"
}

const itemStyles = {
    border: "2px solid white",
    padding: "5px"
}

function Inline(props){
    return(
        <div className="Inline" style={inlineStyles}>
            <h1 style={titleStyles}>{props.title}</h1>
            <p style={textStyles}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur vehicula quam, a tincidunt erat porta nec.</p>
            <ul style={listStyles}>
                <li style={itemStyles}>Donec malesuada venenatis tellus in ultricies.</li>
                <li style={itemStyles}>Nullam suscipit nisl odio, vitae consequat purus dapibus vel.</li>
                <li style={itemStyles}>Fusce sem elit, iaculis id posuere sed, fringilla vel metus.</li>
            </ul>
        </div>
    )
}

export default Inline;