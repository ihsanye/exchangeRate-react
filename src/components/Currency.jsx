import React, { useState } from 'react'
import '../css/currency.css'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import axios from 'axios';

let BASE_URL = 'https://api.freecurrencyapi.com/v1/latest';
let API_KEY = 'fca_live_XURFCn0clS9MvrDj8UceJgHjYAJfBsFPyFEFeBXE';

function Currency() {

    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);

    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);

    }

    return (
        <div className='currency-div'>
            <h3 id='app-title'>Exchange Rate App</h3>
            <div>
                <input value={amount} onChange={(e) => setAmount(e.target.value)}
                    type='number' className='amount' placeholder='Base Currency'></input>
                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-cur'>
                    <option selected>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>
                <FaRegArrowAltCircleRight style={{ fontSize: '20px', color: 'white', margin: '-4px 3px' }} />
                <select onChange={(e) => setToCurrency(e.target.value)} className='to-cur'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option selected>TRY</option>
                </select>
                <input value={result} type='number' className='result' placeholder='Target Currency'></input>
            </div>
            <button onClick={exchange} className='exchange-button'>Convert</button>

        </div>
    )
}

export default Currency

//https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_XURFCn0clS9MvrDj8UceJgHjYAJfBsFPyFEFeBXE&base_currency=USD