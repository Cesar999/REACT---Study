import Amount from './Amount';
import './RenderProps.css';

const Euro = ({ amount }) => <p className="Euro">Euro: {(amount * 0.86).toFixed(2)}</p>;
const Peso = ({ amount }) => <p className="Peso">Peso: {(amount * 20.94).toFixed(2)}</p>;

const RenderProps = () => (
    <div className="RenderProps">
        <h1>Render Props</h1>
        <Amount
            render={amount => (
            <>
                <Euro amount={amount}/>
                <Peso amount={amount}/>
            </>
            )}
        />
    </div>
);

export default RenderProps;