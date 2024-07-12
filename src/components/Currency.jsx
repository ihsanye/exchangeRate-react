import React from 'react'
import '../css/currency.css'

import { FaRegArrowAltCircleRight } from 'react-icons/fa'

function Currency() {
    return (
        <div className='currency-div'>
            <h3 id='app-title'>Exchange Rate App</h3>
            <div>
                <input type='number' className='amount' placeholder='Base Currency'></input>
                <select className='from-cur'>
                    <option selected>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>
                <FaRegArrowAltCircleRight style={{ fontSize: '20px', color: 'white', margin: '-4px 3px' }} />
                <select className='to-cur'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option selected>TRY</option>
                </select>
                <input type='number' className='result' placeholder='Target Currency'></input>
            </div>
            <button className='exchange-button'>Convert</button>

        </div>
    )
}

export default Currency