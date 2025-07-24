import { useEffect, useState } from 'react';
import '../css/Hero.css'; 

function Hero() {

    const phrases = [
        'Web a medida',
        'IA Generativa',
        'Marketing digital',
        'E-Commerce personalizado'
    ];

    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
    const interval = setInterval(() => {
      // 1) arrancamos la animación de salida
      setIsAnimating(true);

      // 2) al terminar (400ms), cambiamos el texto y quitamos la animación
      setTimeout(() => {
        setIndex(i => (i + 1) % phrases.length);
        setIsAnimating(false);
      }, 400); // debe coincidir con la duración en CSS
    }, 4000);

    return () => clearInterval(interval);
  }, [phrases.length]);

    return (
        <section className='Hero'>
            <h1 className='hero-title'>Acelera tu negocio con soluciones
                <span className={`accent ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                    {phrases[index]}
                </span>
            </h1>

            <p className='hero-sub'>Nos integramos a tu sprint mañana, entregamos demo cada 7 días</p>
            
            <ul className='hero-list'>
                <li>Equipo bilingüe en tu zona horaria</li>
                <li>Metodología ágil con entregas semanales</li>
                <li>Garantía de devolución si no cumplimos el primer sprint</li>
            </ul>

            <button className='hero-cta'>Agenda una llamada</button>
        </section>
    );
}

export default Hero