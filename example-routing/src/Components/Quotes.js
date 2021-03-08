import Item from './Item';

function Quotes(props){
    const quotes = [
        {title: 'Theodore Roosevelt', quote: 'Do what you can, with what you have, where you are.', url:'/images/roosevelt.jpg'},
        {title: 'Napoleon Hill', quote: 'If you cannot do great things, do small things in a great way.', url:'/images/napoleonhill.jpeg'},
        {title: 'Wayne Gretzky', quote: 'You miss 100% of the shots you don’t take.', url:'/images/wayne.jpg'},
        {title: 'Albert Einstein', quote: 'A person who never made a mistake never tried anything new.', url:'/images/albert.jpg'},
        {title: 'Mahatma Gandhi', quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.', url:'/images/gandhi.jpg'}
    ];
    let quotesElements = quotes.map((item, i)=><Item key={i} {...item}/>);
    const itemID = props.match.params.id;
    if(itemID){
        let temp = quotesElements[itemID];
        quotesElements = temp;
    }
    return (
        <div className="Quotes">
            <h1>Quotes</h1>
            <div className="cards-container">
                {quotesElements}
            </div>
        </div>
    )
}

export default Quotes;