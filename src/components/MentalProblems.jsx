import React from 'react';
import './MentalProblemsStyle.css'

const MentalProblems = () => {
    return (
        <div className='mental-container'>
            <div className='mental-main-text'>
                <h2>и главное!</h2>
                <h1>Тренировки&nbsp;помогут  <br/>в решении <span>душевных проблем</span> </h1>
            </div>

            <div className='mental-list-container'>
                <div className='mental-box'>
                    <h2><strong>Вы прочувствуете своё новое тело и примите изменения,</strong>
                        которые произошли за время беременности и после родов.</h2>
                </div>

                <div className='mental-box'>
                    <h2>Начнёте работу над несовершенствами, <strong>будете искренне радоваться своим результатам и стремиться к новым свершениям.</strong></h2>
                </div>

                <div className='mental-box'>
                    <h2><strong>Поймёте, что к вам вернулся контроль над ВАШИМ телом. </strong>
                        Это очень важно, если роды были травмирующими.</h2>
                </div>

                <div className='mental-box'>
                    <h2>Вновь полюбите своё тело со всеми его особенностями, <strong>начнёте улыбаться отражению в зеркале.</strong></h2>
                </div>

                <div className='mental-box'>
                    <h2><strong>Каждый день будет чуточку лучше.</strong>
                        Вслед за телом вас ждёт трансформация мышления и жизни.</h2>
                </div>
            </div>
        </div>
    );
};

export default MentalProblems;