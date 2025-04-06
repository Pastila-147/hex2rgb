import { useState } from 'react';

export default function ColorConverter() {
    const [hexColor, setHexColor] = useState('#');
    const [rgbColor, setRgbColor] = useState('');
    const [error, setError] = useState(false);

    const containerStyle = {
        backgroundColor: error
            ? '#FF6347'
            : (hexColor.length === 7 ? hexColor : '#fff'),
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'sans-serif',
    };

    const onValueChange = (e) => {
        const value = e.target.value;
        setHexColor(value);

        if (error) {
            setError(false);
            setRgbColor('');
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (hexColor.length === 7 && /^#[0-9A-Fa-f]{6}$/.test(hexColor)) {
            const r = parseInt(hexColor.slice(1, 3), 16);
            const g = parseInt(hexColor.slice(3, 5), 16);
            const b = parseInt(hexColor.slice(5, 7), 16);
            setRgbColor(`rgb(${r}, ${g}, ${b})`);
            setError(false);
        } else {
            setRgbColor('');
            setError(true);
        }
    };

    return (
        <div className="container" style={containerStyle}>
            <form className="ColorConverterForm" onSubmit={onSubmit}>
                <input
                    id="color"
                    name="color"
                    className="ColorConverterInput"
                    onChange={onValueChange}
                    value={hexColor}
                    maxLength={7}
                    placeholder="#RRGGBB"
                    style={{
                        padding: '0.5rem 1rem',
                        fontSize: '1rem',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        textAlign: 'center',
                        width: '160px',
                    }}
                />
                <label
                    className="ColorConverterBox"
                    htmlFor="color"
                    style={{
                        display: 'block',
                        padding: '0.5rem 1rem',
                        marginTop: '1rem',
                        fontSize: '1rem',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        textAlign: 'center',
                        color: error ? '#8B0000' : 'black',
                        backgroundColor: "white"

                    }}
                >
                    {error ? 'Ошибка!' : rgbColor}
                </label>
            </form>
        </div>
    );
}
