import './App.scss';
import Card from './components/Card.component';

const pokes = [
  {name: 'Gengar', type: 'Ghost Poison', id: 94, imageUrl: '/images/Gengar.png'},
  {name: 'Infernape', type: 'Fire Fight', id: 392, imageUrl: '/images/Infernape.png'},
  {name: 'Murkrow', type: 'Dark Flying', id: 198, imageUrl: '/images/Murkrow.png'},
  {name: 'Nidoking', type: 'Poison Earth', id: 34, imageUrl: '/images/Nidoking.png'},
  {name: 'Salamance', type: 'Dragon Flying', id: 373, imageUrl: '/images/Salamance.png'},
  {name: 'Zangoose', type: 'Normal', id: 335, imageUrl: '/images/Zangoose.png'},
];

function App() {
  const PokeCards = pokes.map((poke, index) => <Card key={index} {...poke} />)
  return (
    <div className="App">
      {PokeCards}
    </div>
  );
}

export default App;
