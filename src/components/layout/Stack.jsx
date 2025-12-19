import '../css/Stack.css';

function Stack () {
  return (
    <section className="stack">
      <div className="stack-arc" aria-hidden="true" />

      <div className="stack-title-section">
        <h1 className="stack-title">Nuestro stack tecnológico</h1>
        <h2 className="stack-subtitle">Tecnologías modernas para construir productos</h2>
        <h3 className="stack-subtitle-2">escalables y eficientes</h3>
      </div>

      <div className='stack-grid'>

        <section className='stack-grid-frontend'>
            <header>Frontend</header>
        </section>

        <section className='stack-grid-backend'>
            <header>Backend</header>
        </section>

        <section className='stack-grid-mobile'>
            <header>Mobile</header>
        </section>

        <section className='stack-grid-ia'>
            <header>IA-Automatización</header>
        </section>
      </div>
    </section>
  );
}

export default Stack;
