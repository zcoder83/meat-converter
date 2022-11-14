import "./App.css";
import { useState } from "react";

function App() {
    const lbPerKilo = 0.453592;

    // declare variable for per price column
    const [pound, setPound] = useState("");
    const [gram, setGram] = useState("");
    const [kilo, setKilo] = useState("");

    // declare variable for weight and price columns
    const [kWeight, setKWeight] = useState("");
    const [kPrice, setKPrice] = useState("");

    const [lWeight, setLWeight] = useState("");
    const [lPrice, setLPrice] = useState("");
    // handler for per price
    const handlePound = (e) => {
        let num = e.target.value;
        let convertKilo = num / lbPerKilo;
        let convertGram = num / (lbPerKilo * 10);
        setGram(convertGram.toFixed(2));
        setKilo(convertKilo.toFixed(2));
        setPound(num);
    };
    const handleGram = (e) => {
        let num = e.target.value;
        let convertPound = num * (lbPerKilo * 10);
        setKilo(num * 10);
        setPound(convertPound.toFixed(2));
        setGram(num.toFixed(2));
    };
    const handleKilo = (e) => {
        let num = e.target.value;
        let convertPound = num * lbPerKilo;
        setPound(convertPound.toFixed(2));
        setKilo(num);
        setGram((num / 10).toFixed(2));
    };
    // clear all input contents
    const handleClick = () => {
        setPound("");
        setGram("");
        setKilo("");
        setKPrice("");
        setKWeight("");
        setLPrice("");
        setLWeight("");
    };
    // weight and price handler
    const handleKiloWeight = (e) => {
        let weight = e.target.value;
        setKWeight(weight);
        if (kPrice > 0 && weight > 0) {
            let result = (kPrice / weight).toFixed(2);
            setKilo(result);
        }
    };
    const handleKiloPrice = (e) => {
        let price = e.target.value;
        setKPrice(price);
        if (price > 0 && kWeight > 0) {
            let result = (price / kWeight).toFixed(2);
            setKilo(result);
        }
    };
    const handlePoundWeight = (e) => {
        let weight = e.target.value;
        setLWeight(weight);
        if (lPrice > 0 && weight > 0) {
            let result = (lPrice / weight).toFixed(2);
            setPound(result);
        }
    };
    const handlePoundPrice = (e) => {
        let price = e.target.value;
        setLPrice(price);
        if (price > 0 && lWeight > 0) {
            let result = (price / lWeight).toFixed(2);
            setPound(result);
        }
    };
    function handleDisplay() {
        let m_pound = document.getElementById("pound").value;
        //        let m_gram = document.getElementById("gram").value;
        let m_kg = document.getElementById("kg").value;
        if (m_kg > 0) {
            document.getElementById("pound").value = (kilo * lbPerKilo).toFixed(
                2
            );
            document.getElementById("gram").value = (kilo / 10).toFixed(2);
        }
        if (m_pound > 0) {
            document.getElementById("kg").value = (pound / lbPerKilo).toFixed(
                2
            );
            document.getElementById("gram").value = (
                pound /
                (lbPerKilo * 10)
            ).toFixed(2);
        }
    }
    return (
        <div className="App container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">type</th>
                        <th scope="col">weight</th>
                        <th scope="col">price</th>
                        <th scope="col">per price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1lb</th>
                        <td>
                            <input
                                type="text"
                                className="form-control textinput"
                                onChange={handlePoundWeight}
                                value={lWeight}
                            ></input>
                        </td>
                        <td>
                            <input
                                type="text"
                                className="form-control textinput"
                                onChange={handlePoundPrice}
                                value={lPrice}
                            ></input>
                        </td>
                        <td>
                            <input
                                type="text"
                                className="form-control textinput"
                                id="pound"
                                onChange={handlePound}
                                value={pound}
                            ></input>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">100g</th>
                        <td>
                            <input
                                type="text"
                                className="form-control textinput"
                                onChange={handleGram}
                            ></input>
                        </td>
                        <td>
                            <input
                                type="text"
                                className="form-control textinput"
                                onChange={handleGram}
                            ></input>
                        </td>
                        <td>
                            <input
                                type="text"
                                className="form-control textinput"
                                id="gram"
                                value={gram}
                                onChange={handleGram}
                            ></input>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1kg</th>
                        <td>
                            <input
                                type="text"
                                className="form-control textinput"
                                onChange={handleKiloWeight}
                                value={kWeight}
                            ></input>
                        </td>
                        <td>
                            <input
                                type="text"
                                className="form-control textinput"
                                onChange={handleKiloPrice}
                                value={kPrice}
                            ></input>
                        </td>
                        <td>
                            <input
                                type="text"
                                className="form-control textinput"
                                id="kg"
                                value={kilo}
                                onChange={handleKilo}
                            ></input>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            <button
                                className="btn btn-primary"
                                onClick={handleClick}
                            >
                                Clear
                            </button>
                        </td>
                        <td>
                            <button
                                className="btn btn-dark"
                                onClick={handleDisplay}
                            >
                                Display
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default App;
