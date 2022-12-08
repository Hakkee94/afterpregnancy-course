import React from 'react';
import './NewLifeStyle.css'

const NewLife = () => {
    return (
        <div className='new-life-container'>
            <div className='new-life-text'>
                <h1>Вы создали новую жизнь,<br/>пришло <span>время подумать о себе</span></h1>
            </div>

            <div className='new-life-box-container'>
                <div className='new-life-box'>
                    <div className='new-life-image'>
                        <img
                            src='https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/ce38ad1768a1a5c8c84eb5f51f748833.png/s/500x/a/3187/sc/207'/>
                    </div>
                    <div className='new-life-first-span'>
                        <span>20 минут только <br/> для себя</span>
                    </div>
                    <div className='new-life-second-span'>
                        <span>Тренировки в удобном режиме, <br/>возможность отвлечься от быта и рутины</span>
                    </div>
                </div>

                <div className='new-life-box'>
                    <div className='new-life-image'>
                        <img
                            src='https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/49bb59cb01db34229649b64fe8f38b1a.png/s/500x/a/3187/sc/198'/>
                    </div>
                    <div className='new-life-first-span'>
                        <span>Рекомендации<br/>по фитнес-питанию</span>
                    </div>
                    <div className='new-life-second-span'>
                        <span>Вкусно и полезно для вас, безопасно для малыша на ГВ. Одобрено профессионалами</span>
                    </div>
                </div>

                <div className='new-life-box'>
                    <div className='new-life-image'>
                        <img
                            src='https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/2b05f42fde1ae906f3919b9c0b319b5d.png/s/500x/a/3187/sc/238'/>
                    </div>
                    <div className='new-life-first-span'>
                        <span>С учётом всех <br/>особенностей</span>
                    </div>
                    <div className='new-life-second-span'>
                        <span>Всё, чтобы избавиться от лишних кг и подтянуть тело, предотвратить проблемы со здоровьем</span>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default NewLife;