import Item from './Item';
import {useHistory, useLocation, useParams, useRouteMatch} from "react-router-dom";

function Movies(props){
    const movies = [
        {title: 'Gladiator', quote: 'What we do in life echoes in eternity', url:'/images/gladiator.jpg'},
        {title: 'Aquiles', quote: 'Boy: He is the biggest man I\'ve ever seen. I wouldn\'t want to fight him. Aquiles: That\'s why no one will remember your name', url:'/images/aquiles.jpg'},
        {title: 'John Wick', quote: '"Fortune favours the bold", "Fortune favours the brave" and "Fortune favours the strong"', url:'/images/jonwick.jpg'},
        {title: 'Pirates of the Caribbean', quote: 'The world\'s still the same. There\'s just less in it.', url:'/images/jack.jpg'},
        {title: 'Lord of The Rings', quote: 'Deeds will not be less valiant because they are unpraised.', url:'/images/aragorn.jpg'},
    ];
    let moviesElements = movies.map((item, i)=><Item key={i} {...item}/>);
    const itemID = props.match.params.id;
    if(itemID){
        let temp = moviesElements[itemID];
        moviesElements = temp;
    }
    const history = useHistory();
    const location = useLocation();
    const params = useParams();
    const match = useRouteMatch("/movies/:id");

    console.log(history, ' history - movies');
    console.log(location, ' location - movies');
    console.log(params, ' params - movies');
    console.log(match, ' match - movies');
    console.log('params: ', props.match.params);
    return (
        <div className="Movies">
            <h1>Movies</h1>
            <div className="cards-container">
                {moviesElements}
            </div>
        </div>
    )
}

export default Movies;