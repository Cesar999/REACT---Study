import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: palevioletred;
    color: white;
    font-weight: bold;
    padding: 10px;
    width: 50%;
    box-sizing: border-box;
`;
const Title = styled.h1`
    text-transform: capitalize;
    text-shadow: 2px 2px 4px gray;
`;
const Text = styled.p`
    border-radius: 5px;
    text-decoration: underline;
`;
const List = styled.ul`
    border:2px solid gray;
    list-style-position: inside;
    list-style-type: square;
`;
const Item = styled.li`
    border: 2px solid white;
    padding: 5px;
`;

function Styled(props){
    return(
        <StyledDiv>
            <Title>{props.title}</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur vehicula quam, a tincidunt erat porta nec.</Text>
            <List>
                <Item>Donec malesuada venenatis tellus in ultricies.</Item>
                <Item>Nullam suscipit nisl odio, vitae consequat purus dapibus vel.</Item>
                <Item>Fusce sem elit, iaculis id posuere sed, fringilla vel metus.</Item>
            </List>
        </StyledDiv>
    )
}

export default Styled;




