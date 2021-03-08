import Item from './Item';

function Books(props){
    const books = [
        {title: 'A Song of Ice And Fire', quote: 'Can a man still be brave if he’s afraid? That is the only time a man can be brave!', url:'/images/nedstark.jpg'},
        {title: 'Harry Potter', quote: 'It is our choices... that show what we truly are, far more than our abilities.', url:'/images/albus.png'},
        {title: 'Lord of The Rings', quote: 'All we have to decide is what to do with the time that is given us.', url:'/images/gandalf.jpg'}
    ];
    let booksElements = books.map((item, i)=><Item key={i} {...item}/>);
    const itemID = props.match.params.id;
    if(itemID){
        let temp = booksElements[itemID];
        booksElements = temp;
    }
    console.log('params: ', props.match.params);
    return (
        <div className="Books">
            <h1>Books</h1>
            <div className="cards-container">
                {booksElements}
            </div>
        </div>
    )
}

export default Books;