import React from 'react';
import './PresentsForYouStyle.css'
import tracker from '../tracker.png'
import guide from '../guide.png'

const PresentsForYou = () => {
    return (
        <div className='presents-for-you-container'>
            <div className='presents-for-you-text'>
                <h1>Мы дарим подарки</h1>
                <span>только для вас</span>
                <h2>КОГДА ОСТАЛЬНЫЕ — ТОЛЬКО ДЛЯ МАЛЫША</h2>
            </div>

            <div className='presents-for-you-img'>
                <div>
                    <img src={tracker}/>
                </div>

                <div>
                    <img src={guide}/>
                </div>
            </div>
        </div>
    );
};

export default PresentsForYou;