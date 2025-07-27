import { DeviceIMacCode, DeviceMobile, Automation, Sparkles, Speakerphone, Message} from '../../assets/icons'
import '../css/WhatWeDo.css'

function WhatWeDo() {
    return (
        <section className='WhatWeDo'>
            <div className='WhatWeDo-Text'>
                <h1 className='wwd-title'>Qué hacemos</h1>
                <h2 className='wwd-sub'>Desarrollo de productos, automatización de procesos y marketing digital</h2>
                <ul className='wwd-items'>
                    <li>Lanzar MVP</li>
                    <li>Optimizar procesos</li>
                    <li>Escalar marketing</li>
                </ul>
            </div>

            <div className='cards'>
                <ul className='card-grid'>
                    <li className='card'>
                        <div className='card-title'>
                            <img src={DeviceIMacCode} alt="" />
                            <h3> Desarrollo web</h3>
                        </div>
                        <p>MVP funcional listo para producción en -30 días</p>
                        <ul>
                            <li>Kickoff 48 h</li>
                            <li>A medida</li>
                        </ul>
                    </li>
                    
                    <li className='card'>
                        <div className='card-title'>
                            <img src={DeviceMobile} alt="" />
                            <h3> Desarrollo mobile</h3>
                        </div>
                        <p>Apps nativas o cross-platform listas para la store</p>
                        <ul>
                            <li className='card-sub'>Kickoff 48 h</li>
                            <li className='card-sub'>Desde 6 sem</li>
                        </ul>
                    </li>

                    <li className='card'>
                        <div className='card-title'>
                            <img src={Automation} alt="" />
                            <h3> Automatización de procesos</h3>
                        </div>
                        <p>Reduce tareas repetitivas con bots y flujos automáticos</p>
                        <ul>
                            <li className='card-sub'>Set Up 7 días</li>
                            <li className='card-sub'>Optimización</li>
                        </ul>
                    </li>

                    <li className='card'>
                        <div className='card-title'>
                            <img src={Speakerphone} alt="" />
                            <h3>Marketing Digital</h3>
                        </div>
                        <p>Montamos y operamos tus campañas para generar</p>
                        <a href="#">Ver detalles</a>
                    </li>

                    <li className='card'>
                        <div className='card-title'>
                            <img src={Sparkles} alt="" />
                            <h3>Integraciones con IA</h3>
                        </div>
                        <p>Si tienes alguna idea con IA la hacemos realidad</p>
                        <a href="#">Ver detalles</a>
                    </li>

                    <li className='card'>
                        <div className='card-title'>
                            <img src={Message} alt="" />
                            <h3>¿No ves lo que necesitas?</h3>
                        </div>
                        <p>Cuéntanos tu caso y armamos un plan a medida</p>
                        <a href="#">Hablemos</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default WhatWeDo