
const generateStars = (count: number): string => {
    const shadows: string[] = [];
    for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random()*2000);
        const y = Math.floor(Math.random()*2000);
        
        shadows.push(`${x}px ${y}px #8f8f8f`);
    }
    return shadows.join(', ')
}

const Stars = () => {

    const smallStars = generateStars(1400);
    const mediumStars = generateStars(400);
    const bigStars = generateStars(200);

    const starStyles = `
        #stars::after { box-shadow: ${smallStars}; }
        #stars2::after { box-shadow: ${mediumStars}; }
        #stars3::after { box-shadow: ${bigStars}; }
    `;

    return (
        <div className="fixed top-0 w-screen h-screen overflow-hidden z-[-1]">
            <style>{starStyles}</style>
            <div id="stars"
                className="absolute w-full h-full animate-starSmall"></div>
            <div id="stars2"
                className="absolute w-full h-full animate-starMedium"></div>
            <div id="stars3"
                className="absolute w-full h-full animate-starBig"></div>
        </div>
    );
}

export default Stars;