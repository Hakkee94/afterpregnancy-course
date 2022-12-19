import React from 'react';
import './DelayStyle.css'

const Delay = () => {
    return (
        <div className='contraindications-container'>
            <div className='contraindications-text'>
                <h2>ЗАНИМАЙТЕСЬ ТОЛЬКО НА ПОЛЬЗУ СЕБЕ — ОТЛОЖИТЕ <br/> ТРЕНИРОВКИ, ЕСЛИ У ВАС ЕСТЬ</h2>
                <h1>противопоказания</h1>
            </div>

            <div className='contraindications-list'>
                <ul>
                    <li>Острые воспалительные процессы</li>
                    <li>Грыжа белой линии живота</li>
                    <li>Диастаз размером более 4 см</li>
                </ul>

                <ul>
                    <li>Опущение органов малого таза</li>
                    <li>Варикозное расширение вен малого таза</li>
                    <li>Остеопороз любой степени</li>
                </ul>
            </div>

            <div className='care-yourself-text'>
                <h1>Займитесь собой</h1>
            </div>

            <div className='care-yourself-text'>
                <h2>без чувства вины</h2>
            </div>

            <div className='without-guilt-container'>
                <div className='without-guilt-box'>
                    <div className='guilt-text'>
                        <span>Через день — новая тренировка на 20 минут в формате <strong>«повторяй за мной»</strong></span>
                    </div>

                    <div className='guilt-number'>
                        <span>01</span>
                    </div>
                </div>

                <div className='without-guilt-box'>
                    <div className='guilt-text'>
                        <span>Еженедельно —  <strong>замеры для самоконтроля</strong> и мотивации от видимых результатов</span>
                    </div>

                    <div className='guilt-number'>
                        <span>02</span>
                    </div>
                </div>

                <div className='without-guilt-box'>
                    <div className='guilt-text'>
                        <span>В дополнительных материалах — <strong>рекомендации по питанию</strong> от профессионалах</span>
                    </div>

                    <div className='guilt-number'>
                        <span>03</span>
                    </div>
                </div>

                <div className='without-guilt-box'>
                    <div className='guilt-text'>
                        <span><strong>Инвентарь, который можно заменить. </strong>Коврик, 2 гантели по 2 кг, фитнес-резинка с сопротивлением до 5 кг и утяжелители</span>
                    </div>

                    <div className='guilt-number'>
                        <span>04</span>
                    </div>
                </div>
            </div>

            {/*<div className='without-guilt-container'>*/}


            {/*</div>*/}

            <div className='home-training-container'>
                <div className='home-training-img'>
                    <img src='https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/2665c38c93209e14fa5dab3d2b31ed85.png/s/s1200x/a/3187/sc/189'/>
                </div>

                <div className='home-training-text'>
                    <h2>Можно&nbsp;тренироваться&nbsp;как дома, так и в зале.</h2>
                    <span>Дайте папе возможность наладить связь с ребенком, а сами занимайтесь в удовольствие.</span>
                </div>
            </div>

            <div className='safety-text'>
                <div>
                    <h1>3 составляющие</h1>
                </div>
                <div className='purple-text'>
                    <span>для безопасного</span>
                </div>
                <div>
                    <h1>восстановления после родов</h1>
                </div>
            </div>

            <div className='safety-box-container'>
                <div className='safety-box'>
                    <div className='safety-img'>
                        <img src='https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/be008f7e3eef3e1c05c57bc503c738ef.png/s/500x/a/3187/sc/337'/>
                    </div>

                    <div className='safety-box-text'>
                        <h2>30 ТРЕНИРОВОК СПЕЦИАЛЬНО ДЛЯ МАМ</h2>
                    </div>

                    <div className='safety-box-list'>
                        <ul>
                            <li>укрепление мышц тазового дна, ягодиц, пресса <br/> и внутренней поверхности бёдер</li>
                            <li>координация и баланс</li>
                            <li>мягкая растяжка</li>
                            <li>работа с проблемными зонами</li>
                        </ul>
                    </div>
                </div>

                <div className='safety-box'>
                    <div className='safety-img'>
                        <img src='https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/a2e1678874dca10dd360e2c741d97f48.png/s/500x/a/3187/sc/151'/>
                    </div>

                    <div className='safety-box-text'>
                        <h2>РЕКОМЕНДАЦИИ ПО ПИТАНИЮ</h2>
                    </div>

                    <div className='safety-box-list'>
                        <ul>
                            <li>здоровый рацион для кормящей мамы</li>
                            <li>похудение без голодовки</li>
                            <li>расчёт необходимого потребления калорий <br/>и примеры суточного рациона</li>
                        </ul>
                    </div>
                </div>

                <div className='safety-box'>
                    <div className='safety-img'>
                        <img src='https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/be8d7c68232ba39be3cb5d1488425465.png/s/500x/a/3187/sc/152'/>
                    </div>

                    <div className='safety-box-text'>
                        <h2>ПРОФИЛАКТИКА ПОСЛЕРОДОВЫХ ПРОБЛЕМ</h2>
                    </div>

                    <div className='safety-box-list'>
                        <ul>
                            <li>бережная работа с диастазом</li>
                            <li>избавление от болей в паху и пояснице</li>
                            <li>уменьшение растяжек и целлюлита</li>
                            <li>помощь в решении самых деликатных проблем</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delay;