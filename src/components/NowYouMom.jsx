import React from 'react';
import './NowYouMomStyle.css'
import womanTipping from '../emoji/woman-tipping-hand-blonde.png'
import womanYoga from '../emoji/woman-yoga-brunette.png'
import womanFitness from '../emoji/woman-fintess.png'
import womanGesturing from '../emoji/woman-gesturing-brunette.png'
import smilingFace from '../emoji/smiling-eyes.png'
import avacado from '../emoji/avacado.png'
import inYan from '../emoji/yin-yang.png'

const NowYouMom = () => {
    return (
        <div className='you-mom-container'>
            <div className='mom-main-text'>
                <h1>Теперь вы мама, поэтому <br/>
                    <span>должны думать о себе</span></h1>
            </div>

            <div className='tall-text'>
                <span>За 3 месяца программы вы решите множество приятных задач:</span>
            </div>

            <div className='you-mom-container-box'>
                <div className='you-mom-box'>
                    <div className='check-img'>
                        <img src={womanTipping}/>
                    </div>

                    <div className='you-mom-box-text'>
                        <h2>Избавиться от лишнего веса и подтянуть всё тело <strong>без риска для лактации</strong> </h2>
                    </div>
                </div>

                <div className='you-mom-box'>
                    <div className='check-img'>
                        <img src={womanYoga}/>
                    </div>

                    <div className='you-mom-box-text'>
                        <h2><strong>Свести к нулю растяжки, целлюлит </strong> и дряблость кожи</h2>
                    </div>
                </div>

                <div className='you-mom-box'>
                    <div className='check-img'>
                        <img src={womanFitness}/>
                    </div>

                    <div className='you-mom-box-text'>
                        <h2>Вернуть красивую осанку, <strong>забыть о постоянных болях в спине и шее</strong></h2>
                    </div>
                </div>

                <div className='you-mom-box'>
                    <div className='check-img'>
                        <img src={womanGesturing}/>
                    </div>

                    <div className='you-mom-box-text'>
                        <h2><strong>Меньше уставать </strong>от укачивания, сна в неудобных позах и постоянных наклонов к малышу</h2>
                    </div>
                </div>

                <div className='you-mom-box'>
                    <div className='check-img'>
                        <img src={smilingFace}/>
                    </div>

                    <div className='you-mom-box-text'>
                        <h2><strong>Улучшить самочувствие и настроение,</strong> даже если не удалось выспаться</h2>
                    </div>
                </div>

                <div className='you-mom-box'>
                    <div className='check-img'>
                        <img src={avacado}/>
                    </div>

                    <div className='you-mom-box-text'>
                        <h2><strong>Научиться питаться с пользой</strong> для фигуры и своего малыша, если он на ГВ</h2>
                    </div>
                </div>

                <div className='you-mom-box'>
                    <div className='check-img'>
                        <img src={inYan}/>
                    </div>

                    <div className='you-mom-box-text'>
                        <h2><strong>Быстрее справиться с послеродовыми проблемами</strong> — физическими и психологическими</h2>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default NowYouMom;