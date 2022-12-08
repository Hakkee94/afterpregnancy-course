import React from 'react';
import './SomethingBiggerStyle.css'

const SomethingBigger = () => {
    return (
            <div className='something-bigger-container'>
                <div className='something-bigger-img'>
                    <img src='https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/196c86987087970e56ad37a0f38c6756.png/s/s1200x/a/3187/sc/500'/>
                </div>

                <div className='something-bigger-text'>
                    <h2>Вас&nbsp;ждёт&nbsp;нечто&nbsp;большее,<br/>чем&nbsp;просто&nbsp;тренировки</h2>
                    <span>Это возможность немного отвлечься и заняться собой, чтобы не превращать уход за ребёнком в культ и гиперопеку.</span>
                </div>
            </div>
    );
};

export default SomethingBigger;