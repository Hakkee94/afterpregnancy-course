import React from 'react';
import './PresentsForYouStyle.css'

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
                    <img src='https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/a0b705abf588b035ab6f64dcb27b3eca.png/s/s1200x/a/3187/sc/368'/>
                </div>

                <div>
                    <img src='https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/74100dc3a1250280ccc376687e8fabb2.png/s/s1200x/a/3187/sc/129'/>
                </div>
            </div>
        </div>
    );
};

export default PresentsForYou;