import './Card.scss';

function Card(props) {
    const gradient = getGradient(props.type);
    const myStyle = {
        background: gradient
    };
    return (
      <div className="Card" style={myStyle}>
          <h1>{props.name}</h1>
          <img src={props.imageUrl} alt={props.name}/>
          <p>{props.type}</p>
          <div>{props.id}</div>
      </div>
    );
}

function getGradient(type){
    const types = type.split(' ');
    const colors = {
        Ghost: '#1f2077',
        Poison: '#9718b1',
        Fire: '#ff6600',
        Fight: '#c51515',
        Dark: '#363636',
        Flying: '#aa8be4',
        Earth: '#85462d',
        Dragon: '#583099',
        Normal: '#ebd6f0'
    };
    if(types.length === 2) {
        return `linear-gradient(135deg, ${colors[types[0]]}, ${colors[types[1]]}`;
    } else {
        return `linear-gradient(90deg, ${colors[types[0]]}, ${colors[types[0]]}`;
    }
    
}

export default Card;