import '../css/Timeline.css'

function Timeline(){
    return (
        <section className='timeline'>
            <h1 className='timeline-title'>Nuestro proceso explicado a detalle.</h1>

            <ol className='timeline-list'>
                <li className='timeline-item'>
                    <span className='timeline-number'>1</span>
                    <div className='timeline-content'>
                        <span className='timeline-step'>PASO 1</span>
                        <h3 className='timeline-heading'>Llamada de exploración</h3>
                        <p className='timeline-text'>Reunión colaborativa para entender tu negocio/idea en una llamada de exploración. Definiremos objetivos y problemática, alcance, restricciones, presupuesto y tiempos.</p>
                    </div>
                </li>

                <li className='timeline-item'>
                    <span className='timeline-number'>2</span>
                    <div className='timeline-content'>
                        <span className='timeline-step'>PASO 2</span>
                        <h3 className='timeline-heading'>Propuesta técnica y comercial</h3>
                        <p className='timeline-text'>Entrega de Statement of Work (SOW, documento que especificarán términos de contrato, todos los entregables, casos de uso, y tiempos de entrega) y discusión de la solución propuesta contigo para llegar a propuesta que mejor se ajuste a tus planes.</p>
                    </div>
                </li>

                <li className='timeline-item'>
                    <span className='timeline-number'>3</span>
                    <div className='timeline-content'>
                        <span className='timeline-step'>PASO 3</span>
                        <h3 className='timeline-heading'>Comenzamos a trabajar</h3>
                        <p className='timeline-text'>Una vez acordemos todos los términos comenzamos a trabajar inmediatamente. Te presentamos diseño y prototipado, te mostramos cada progreso, actualizaciones periodicas y nos adaptamos a tus necesidades</p>
                    </div>
                </li>

                <li className='timeline-item'>
                    <button className='timeline-cta'>Agenda una llamada</button>
                </li>
            </ol>
        </section>
    )
}

export default Timeline;