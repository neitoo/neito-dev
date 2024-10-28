import { useEffect, useState } from 'react';

interface TextHeaderProps {
    text: string; // Пропс, принимающий строку
}

const TextHeader: React.FC<TextHeaderProps> = ({ text }) => {
    const [displayedText, setDisplayedText] = useState<string>('{}');

    useEffect(() => {
        const parts = text.split('');
        const totalParts = parts.length;
        const middleIndex = Math.floor(totalParts / 2);

        let leftText = ''; 
        let rightText = ''; 
        let currentIndexLeft = middleIndex - 1;
        let currentIndexRight = middleIndex; 

        const updateDisplayedText = () => {
            setDisplayedText(`{ ${leftText} ${rightText} }`); 
        };

        const interval = setInterval(() => {
            if (currentIndexLeft >= 0) {
                leftText = parts[currentIndexLeft] + leftText; 
                currentIndexLeft--; 
            }

            if (currentIndexRight < totalParts) {
                rightText += parts[currentIndexRight]; 
                currentIndexRight++; 
            }

            updateDisplayedText(); 

            if (currentIndexLeft < 0 && currentIndexRight >= totalParts) {
                clearInterval(interval);
            }
        }, 100); 

        return () => clearInterval(interval); 
    }, [text]);

    return <h1 className="text-2xl 2xl:text-5xl uppercase">{displayedText}</h1>;
};

export default TextHeader;
