import React, { useRef, useState, useEffect } from 'react';

export default function useGlitch(text, color) {
    const [value, setValue] = useState(text);
    const [active, setActive] = useState(false);

    const ref = useRef(null);
    const charList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    const colorList = ["#FF6663", "#FEB144", "#9EE09E", "#9EC1CF", "#CC99C9"];
    const ranColor = colorList[Math.floor(Math.random() * colorList.length)]
    const shuffSpeed = 25;

    const handleMouseOver = () => setActive(true);
    const handleMouseOut = () => {
        setActive(false);
        setValue(text);
        ref.current.style.color = color;
    }

    useEffect(() => {
        const node = ref.current;
        if (node) {
            node.addEventListener('mouseover', handleMouseOver);
            node.addEventListener('mouseout', handleMouseOut);

            return () => {
                node.removeEventListener('mouseover', handleMouseOver);
                node.removeEventListener('mouseout', handleMouseOut);
            };
        }
    }, [ref.current]);

    useEffect(() => {
        let intervalId;
        if (active) {
            intervalId = setInterval(() => {
                var ranText = "";
                for (let i = 0; i < text.length; i++) {
                    const ranChar = charList.charAt(Math.floor(Math.random() * 36));
                    ranText += ranChar;
                }

                setValue(ranText);
                ref.current.style.color = ranColor;
            }, shuffSpeed)
        }

        return () => clearInterval(intervalId);
    }, [active]);

    useEffect(() => {
        setActive(true);

        setTimeout(() => {
            setActive(false);
            setValue(text);
            ref.current.style.color = color;
        }, 1000) 
    }, []);

    return [ref, value];
}