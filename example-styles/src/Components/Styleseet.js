import './Stylesheet.scss';

function Stylesheet(props){
    return(
        <div className="Stylesheet">
            <h1 className="title">{props.title}</h1>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur vehicula quam, a tincidunt erat porta nec.</p>
            <ul className="list">
                <li className="item">Donec malesuada venenatis tellus in ultricies.</li>
                <li className="item">Nullam suscipit nisl odio, vitae consequat purus dapibus vel.</li>
                <li className="item">Fusce sem elit, iaculis id posuere sed, fringilla vel metus.</li>
            </ul>
        </div>
    )
}

export default Stylesheet;