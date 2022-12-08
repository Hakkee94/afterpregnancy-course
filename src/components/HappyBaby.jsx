import React from 'react';
import './HappyBabyStyle.css'
import {Link} from "react-scroll";

const HappyBaby = () => {
    return (
        <div className='happy-baby-container'>
            <div className='happy-baby-main-text'>
                <h1>Стройная и здоровая мама = <br/>Счастливый малыш</h1>
                <h2>Результаты на пользу вам, ребёнку и отношениям</h2>
            </div>

            <div className='happy-baby-box-container'>
                <div className='happy-baby-box'>
                    <div className='baby-box-img'>
                        <img src='https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/33001130fde2475e58eb7532cac2c85b.png/s/500x/a/3187/sc/129'/>
                    </div>
                    <div className='baby-box-text'>
                        <span>Красивое тело без растяжек, целлюлита <br/>и складок кожи</span>
                    </div>
                </div>

                <div className='happy-baby-box'>
                    <div className='baby-box-img'>
                        <img src='https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/b1b26e75c2e4a997adc13f1d020bdb58.png/s/500x/a/3187/sc/276'/>
                    </div>
                    <div className='baby-box-text'>
                        <span>Прекрасное самочувствие и настроение в условиях недосыпа</span>
                    </div>
                </div>

                <div className='happy-baby-box'>
                    <div className='baby-box-img'>
                        <img src='https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/a8875f2b2ad817bc9614efb38f63e0a9.png/s/500x/a/3187/sc/253'/>
                    </div>
                    <div className='baby-box-text'>
                        <span>Забота о здоровье, чтобы меньше обращаться к врачам</span>
                    </div>
                </div>
            </div>

            <div className='happy-baby-box-container'>
                <div className='happy-baby-box'>
                    <div className='baby-box-img'>
                        <img src='https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/5ed72274b792b501f7bb5eabf8b9af67.png/s/500x/a/3187/sc/299'/>
                    </div>
                    <div className='baby-box-text'>
                        <span>Энергия и новые силы для себя и ухода за малышом</span>
                    </div>
                </div>

                <div className='happy-baby-box'>
                    <div className='baby-box-img'>
                        <img src='https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/911a196ee3b739718c46178e26f2be57.png/s/500x/a/3187/sc/67'/>
                    </div>
                    <div className='baby-box-text'>
                        <span>Ощущение собственной привлекательности и сексуальности</span>
                    </div>
                </div>

                <div className='happy-baby-box'>
                    <div className='baby-box-img'>
                        <img src='https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/ddd97209db88da280d083d4877c3a085.png/s/500x/a/3187/sc/157'/>
                    </div>
                    <div className='baby-box-text'>
                        <span>Возвращение любви к своему телу, даже если роды прошли не лучшим образом</span>
                    </div>
                </div>
            </div>

            <div className='enroll-btn'>
                <button> <Link to="formPay" spy={true} smooth={true} offset={50} duration={500}>записаться&nbsp;на&nbsp;курс&nbsp;со&nbsp;скидкой</Link></button>
            </div>
        </div>
    );
};

export default HappyBaby;