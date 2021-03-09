import Item from './Item';
import {useHistory, useLocation, useParams, useRouteMatch} from "react-router-dom";

function Games(props){
    const games = [
        {title: 'World of Warcraft', quote: 'Whatever I may be - whatever I may become in this world - know that I will always look out for you.', url:'/images/illidan.jpg'},
        {title: 'Pokemon', quote: 'I see now that one’s birth is irrelevant. It’s what you do that determines who you are.', url:'/images/mewtwo.png'},
        {title: 'League of Legends', quote: 'I\'d rather make mistakes than make nothing at all.', url:'/images/ekko.jpg'},
        {title: 'Mortal Kombat', quote: 'Do you remember your own words? We forge our own destinies. No one can alter our chosen paths, neither mortals nor gods.', url:'/images/scorpio.jpg'},
        {title: 'Red Dead Redemption 2', quote: 'Some Jobs Aren\'t For Saving And Some Legacies Are For Pissing On.', url:'/images/arthurmorgan.jpg'}
    ];
    let gamesElements = games.map((item, i)=><Item key={i} {...item}/>)
    const itemID = props.match.params.id;
    if(itemID){
        let temp = gamesElements[itemID];
        gamesElements = temp;
    }
    const history = useHistory();
    const location = useLocation();
    const params = useParams();
    const match = useRouteMatch("/games/:id");

    console.log(history, ' history - games');
    console.log(location, ' location - games');
    console.log(params, ' params - games');
    console.log(match, ' match - games');
    console.log('params: ', props.match.params);
    return (
        <div className="Games">
            <h1>Games</h1>
            <div className="cards-container">
                {gamesElements}
            </div>
        </div>
    )
}

export default Games;