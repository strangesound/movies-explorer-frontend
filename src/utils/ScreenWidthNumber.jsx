import { useState, useEffect } from 'react';

function ScreenWidthNumber(props) {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [howManyCards, setHowManyCards] = useState(1)
    const [moreButtonNumber, setMoreButtonNumber] = useState(1)

    function getWindowDimensions() {
        const { innerWidth: width } = window;
        return {
            width
        };
    }
    function HowManyN({width}) {
        // console.log('width in width',width)
        if (width < 481) {
            setHowManyCards(5);
            setMoreButtonNumber(2);
        }
        else if (width < 1280) {
            setHowManyCards(8);
            setMoreButtonNumber(2);
        }
        else {
            setHowManyCards(12);
            setMoreButtonNumber(3);

        }

    }
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [windowDimensions]);

    useEffect(() => {
        HowManyN(windowDimensions)
        // console.log('useEffect', windowDimensions, howManyCards, moreButtonNumber)
        }, [windowDimensions]);


    return (
        { howManyCards, moreButtonNumber }
    );
}
export default ScreenWidthNumber


    // Обратите внимание, что количество карточек, которые отображаются на странице, зависит от ширины экрана устройства:
    // Ширина 1280px — 12 карточек по 3 в ряд. Кнопка «Ещё» загружает по 3 карточки.
    // Ширина 768px — 8 карточек по 2 в ряд. Кнопка «Ещё» загружает по 2 карточки.
    // Ширина от 320px до 480px — 5 карточек по 1 в ряд. Кнопка «Ещё» загружает по 2 карточки.

