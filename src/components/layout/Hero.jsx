import '../css/Hero.css'; 

function Hero() {
    return (
        <section className='Hero'>
            <h1 className='hero-title'>Escala tu negocio con soluciones
                <span className='accent'>Desarrollo web</span>
            </h1>

            <p className='hero-sub'>Equipo 100 % senior, timezone-aligned y listo para integrarse a tu sprint en 48 h.</p>
            
            <ul className='hero-list'>
                <li>10+ años de experiencia</li>
                <li>Metodología ágil con entregas semanales</li>
                <li>Garantía de devolución si no cumplimos el primer sprint</li>
            </ul>

            <button className='hero-cta'>Agenda una llamada</button>
        </section>
    );
}

export default Hero