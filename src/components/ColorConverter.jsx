import { useState } from 'react';

export default function ColorConverter() {
    const [hex, setHex] = useState('#');
    const [rgb, setRgb] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setHex(value);

        if (value.length === 7) {
            const isValidHex = /^#[0-9A-Fa-f]{6}$/.test(value);

            if (isValidHex) {
                const r = parseInt(value.slice(1, 3), 16);
                const g = parseInt(value.slice(3, 5), 16);
                const b = parseInt(value.slice(5, 7), 16);
                setRgb(`rgb(${r}, ${g}, ${b})`);
                setError(false);
            } else {
                setRgb('');
                setError(true);
            }
        } else {
            setRgb('');
            setError(false);
        }
    };

    return (
        <div
            style={{
                backgroundColor: error ? '#ff0000' : rgb,
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
                fontFamily: 'sans-serif'
            }}
        >
            <input
                value={hex}
                onChange={handleChange}
                placeholder="#RRGGBB"
                maxLength={7}
                style={{
                    padding: '0.5rem 1rem',
                    fontSize: '1.2rem',
                    borderRadius: '4px',
                    border: '1px solid #CCCCCC',
                    textAlign: 'center',
                    width: '160px'
                }}
            />
            <div
                style={{
                    padding: '0.5rem 1rem',
                    fontSize: '1.2rem',
                    fontWeight: '500',
                    borderRadius: '4px',
                    backgroundColor:'white',
                    color: error ? '#8B0000' : 'black',
                    textAlign: 'center',
                    width: '160px'
                }}
            >
                {error ? 'Ошибка' : rgb}
            </div>
        </div>
    );
}
