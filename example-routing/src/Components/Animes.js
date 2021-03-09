import Item from './Item';
import {useHistory, useLocation, useParams, useRouteMatch} from "react-router-dom";

function Animes(props){
    const animes = [
        {title: 'Death Note', quote: 'Look Around You, And All You Will See Are People The World Would Be Better Off Without.', url:'/images/deathnote.jpg'},
        {title: 'Naruto', quote: 'So I Was Not Born With A Whole Lot Of Natural Talent... But I Work Hard And I Never Give Up. That Is My Gift.', url:'/images/rocklee.png'},
        {title: 'Attack On Titan', quote: 'If you win, you live. If you lose, you die. If you don’t fight, you can’t win!', url:'/images/atackontitan.jpg'},
        {title: 'Demon Slayer', quote: 'Don’t Ever Give Up. Even If It’s Painful, Even If It’s Agonizing, Don’t Try To Take The Easy Way Out.', url:'/images/demonslayer.png'},
        {title: 'Samurai Champloo', quote: 'Don’t live your life making up excuses. The one making your choices is yourself!', url:'/images/samuraichamploo.jpg'}
    ];
    let animesElements = animes.map((item, i)=><Item key={i} {...item}/>);
    const itemID = props.match.params.id;
    if(itemID){
        let temp = animesElements[itemID];
        animesElements = temp;
    }

    const history = useHistory();
    const location = useLocation();
    const params = useParams();
    const match = useRouteMatch("/animes/:id");

    console.log(history, ' history - Animes');
    console.log(location, ' location - Animes');
    console.log(params, ' params - Animes');
    console.log(match, ' match - Animes');

    console.log('params: ', props.match.params);
    return (
        <div className="Animes">
            <h1>Animes</h1>
            <div className="cards-container">
                {animesElements}
            </div>
        </div>
    )
}

export default Animes;