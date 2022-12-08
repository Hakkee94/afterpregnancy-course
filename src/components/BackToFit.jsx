import React from 'react';
import './BackToFitStyle.css'



const BackToFit = () => {
    // let nextMidnight = new Date();
    // nextMidnight.setHours(24, 0, 0, 0);
    // let now = new Date();
    // let date = nextMidnight.getTime() - now.getTime();

    return (
        <div className='back-to-fit-container'>
            <div className='back-to-fit-text'>
                <h1>ГОТОВЫ ВЕРНУТЬСЯ <br/> В ДОРОДОВУЮ ФОРМУ</h1>
                <h2>и вновь полюбить своё тело за 3 месяца?</h2>
                <span>Забирайте курс «Фитнес-восстановление после родов» по спеццене</span>
            </div>

            <div className='access'>
                <h2>Доступ - <strong>1 год</strong></h2>
                <h2>Старт - <strong>28 ноября</strong></h2>
            </div>

            {/*<div className='expire'>*/}
            {/*    <h2>Предложение сгорит через:</h2>*/}
            {/*</div>*/}


        </div>
    );
};

export default BackToFit;