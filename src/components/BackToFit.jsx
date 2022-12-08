import React from 'react';
import './BackToFitStyle.css'
import Countdown from "react-countdown";
import {Box} from "@chakra-ui/react";

const renderer = ({hours, minutes, seconds, completed}) => {
    return (
        <Box
            color="#ffffff"
            fontSize={{
                base: '16px',
                lg: '24px',
            }}
            lineHeight="1"
            marginBottom="15px"
            textAlign={{
                base: 'center',
                lg: 'left',
            }}
        >
            <Box
                as="span"
                color="#ffffff"
                fontWeight="bold"
                fontSize={{
                    base: '40px',
                    lg: '50px',
                }}
            >
                {hours}
            </Box>{' '}
            часа{' '}
            <Box
                as="span"
                color="#ffffff"
                fontWeight="bold"
                fontSize={{
                    base: '40px',
                    lg: '50px',
                }}
            >
                {minutes}
            </Box>{' '}
            минут{' '}
            <Box
                as="span"
                color="#ffffff"
                fontWeight="bold"
                fontSize={{
                    base: '40px',
                    lg: '50px',
                }}
            >
                {seconds}
            </Box>{' '}
            секунд
        </Box>
    );
}

const BackToFit = () => {
    let nextMidnight = new Date();
    nextMidnight.setHours(24, 0, 0, 0);
    let now = new Date();
    let date = nextMidnight.getTime() - now.getTime();

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

            <div className='expire'>
                <h2>Предложение сгорит через:</h2>
            </div>

            <div className='filed-expire'>
                <Countdown date={Date.now() + date} renderer={renderer}></Countdown>
            </div>
        </div>
    );
};

export default BackToFit;