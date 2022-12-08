import React from 'react';
import './KatyaRecoveryStyle.css'
import {Link} from "react-scroll";

const KatyaRecovery = () => {
    return (
        <div className='recovery-container'>
            <div className='recovery-main-text'>
                <h1>Как&nbsp;Любовь&nbsp;восстановилась<br/>после&nbsp;родов&nbsp;<span>за 100 дней?</span></h1>
            </div>

            <div className='recovery-box-container'>
                <div className='recovery-box'>
                    <h2><strong>Она прошла через это сама, </strong>
                        поэтому точно знает, как женский организм приходит в себя после рождения ребёнка.</h2>
                </div>

                <div className='recovery-box'>
                    <h2>Создала программу, <strong>чтобы каждая мама могла вернуться в дородовую
                        форму,</strong> избежать проблем со здоровьем и вновь полюбить своё тело.</h2>
                </div>
            </div>

            <div className='take-part'>
                <button> <Link to="formPay" spy={true} smooth={true} offset={50} duration={500}>записаться</Link></button>
            </div>
        </div>
    );
};

export default KatyaRecovery;