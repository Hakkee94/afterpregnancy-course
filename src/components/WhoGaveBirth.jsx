import React from 'react';
import './WhoGaveBirthStyle.css'
import {Link} from "react-scroll";

const WhoGaveBirth = () => {
    return (
        <div className='gave-birth-container'>

            <div className='gave-birth-main-text'>
                <h1><span>Для всех, кто рожал: <br/> </span> самостоятельно или через <br/> кесарево сечение</h1>
            </div>

            <div className='gave-birth-box-container'>
                <div className='gave-birth-box'>
                    <div className='gave-first'>
                        <span>01</span>
                    </div>
                    <div className='gave-second'>
                        <span>Лёгкий старт</span>
                    </div>
                    <div className='gave-third'>
                        <span>Тренировки начинаются в максимально щадящем режиме, чтобы исключить любой стресс и вред здоровью.</span>
                    </div>
                </div>

                <div className='gave-birth-box'>
                    <div className='gave-first'>
                        <span>02</span>
                    </div>
                    <div className='gave-second'>
                        <span>Через 6 месяцев</span>
                    </div>
                    <div className='gave-third'>
                        <span>После рождения малыша вы можете начинать занятия, так ваше тело точно будет готово к полноценному восстановлению.</span>
                    </div>
                </div>

                <div className='gave-birth-box'>
                    <div className='gave-first'>
                        <span>03</span>
                    </div>
                    <div className='gave-second'>
                        <span>Можно и позже</span>
                    </div>
                    <div className='gave-third'>
                        <span>Не поздно заниматься по программе и через год после родов.
                            Главное — начать, а тренировки идеально подойдут, даже если вы никогда не занимались фитнесом.</span>
                    </div>
                </div>
            </div>

            <div className='gave-birth-main-text'>
                <h1>Если не сейчас, то когда? <br/>
                    <span>Скорее всего никогда</span></h1>
            </div>

            <div className='little-text'>
                <span>Посмотрите как Любовь пришла в форму</span>
            </div>



            <div className='take-course'>
                <button> <Link to="formPay" spy={true} smooth={true} offset={50} duration={500}>забрать курс по спеццене</Link></button>
            </div>
        </div>
    );
};

export default WhoGaveBirth;