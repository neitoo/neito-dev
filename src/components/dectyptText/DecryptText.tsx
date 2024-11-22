import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";

interface DecryptTextProps {
  text: string; // Исходный текст
  duration?: number; // Длительность дешифрования
}

const DecryptText: React.FC<DecryptTextProps> = ({ text, duration = 2000 }) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!textRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Отключаем после активации
        }
      },
      { threshold: 0.1 } // Срабатывает, если хотя бы 10% элемента видны
    );

    observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !textRef.current) return;

    const chars = " #▓N_D"; // Случайные символы
    const randomChar = () => chars[Math.floor(Math.random() * chars.length)];
    const element = textRef.current;
    const textArray = text.split("");

    // Устанавливаем начальное состояние текста
    element.innerText = textArray.map((char) => (char === " " ? " " : randomChar())).join("");

    // Анимация дешифрования
    anime({
      targets: textArray.map((_, i) => i), // Каждый символ по индексу
      easing: "easeOutQuad",
      duration,
      round: 1, // Гладкая замена символов
      update: (anim) => {
        const progress = anim.progress / 100; // Прогресс анимации
        element.innerText = textArray
          .map((char, i) => (progress > i / textArray.length ? char : randomChar()))
          .join("");
      },
    });
  }, [isVisible, text, duration]);

  return <span ref={textRef}></span>;
};

export default DecryptText;
