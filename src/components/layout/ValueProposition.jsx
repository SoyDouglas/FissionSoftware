import '../css/ValueProposition.css'
import { Rocket, Alert } from '../../assets/icons'

function ValueProposition() {
    return (
        <section className='value-proposition'>
            <h1 className='value-proposition-title'>De la idea al <span className="highlight">producto</span> <br />en 4 semanas</h1>

            <div className='cards'>
                <ul className='card-list'>
                    <li className='card-problem'>
                        <div className='card-top'>
                            <img src={Alert} alt="" />
                            <h3 className='card-title'>El problema</h3>
                        </div>
                        <p className='card-text'>Las startups pierden tiempo y dinero en desarrollo antes de validar su idea en el mercado.</p>
                    </li>

                    <li className='card-solution'>
                        <div className='card-top'>
                            <img src={Rocket} alt="" />
                            <h3 className='card-title'>Nuestra solución</h3>
                        </div>
                        <p className='card-text'>En Fission lanzamos tu producto en tiempo record, validado, funcional y listo para crecer.</p>
                    </li>
                </ul>

                {/* <button className='value-proposition-cta'>Agenda una llamada</button> */}
            </div>
        </section>
    )
}

export default ValueProposition