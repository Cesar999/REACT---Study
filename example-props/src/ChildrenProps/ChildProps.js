import Child from './Child';
import './ChildProps.css';

function ChildProps(){
    return(
        <div className="ChildProps">
            <Child title={'Owned Pieces'}>
                <ul className="owned">
                    <li>
                        <strong>CPU: </strong>AMD RYZEN 7 3700X 8 Cores 3.6Ghz
                    </li>
                    <li>
                        <strong>GPU: </strong>Zotac Gaming GeForce RTX 2060 6GB GDDR6
                    </li>
                    <li>
                        <strong>RAM: </strong>Gskill F4-3200C16D-32GVK Memoria DDR4
                    </li>
                    <li>
                        <strong>SSD: </strong> WD Blue SSD M.2 1TB
                    </li>
                    <li>
                        <strong>PSU: </strong>Antec NeoECO Gold Zen Series NE700G Zen 700W
                    </li>
                    <li>
                        <strong>MB: </strong>AMD B550 TUF Gaming B550
                    </li>
                </ul>
            </Child>
            <Child title={'Desire Pieces'}>
                <ul className="desire">
                    <li>
                        <strong>CPU: </strong>AMD RYZEN 9 3900X 3.9ghz
                    </li>
                    <li>
                        <strong>GPU: </strong>Zotac Gaming GeForce RTX 3090 Trinity 24GB GDDR6X
                    </li>
                    <li>
                        <strong>RAM: </strong>HyperX Predator HX436C18PB3AK2/64
                    </li>
                    <li>
                        <strong>SSD: </strong> SAMSUNG 980 Pro 2TB
                    </li>
                    <li>
                        <strong>PSU: </strong>Thermaltake Toughpower GF1 750W 80+ Gold
                    </li>
                    <li>
                        <strong>MB: </strong>Asus ROG Crosshair VIII Hero X570 ATX
                    </li>
                </ul>
            </Child>
        </div>
    )
}

export default ChildProps;