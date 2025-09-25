import '../css/ValueProposition.css'

function ValueProposition() {
    return (
        <section className='value-proposition'>
            <h1>De la idea al producto en 4 semanas</h1>

            <div className='cards'>
                <ul className='card-list'>
                    <li className='card-problem'>
                        <div className='card-top'>
                            <img src="" alt="" />
                            <h3 className='card-title'>El problema</h3>
                        </div>
                    </li>

                    <li className='card-solution'>
                        <div className='card-top'>
                            <img src="" alt="" />
                            <h3 className='card-title'>Nuestra solución</h3>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default ValueProposition