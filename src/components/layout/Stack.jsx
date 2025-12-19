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
            <header>🖥️ Frontend</header> 

            <ul className="stack-tech-list">
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
            </ul> 
        </section>

        <section className='stack-grid-backend'>
            <header>🚀 Backend</header>

            <ul className="stack-tech-list">
                <li>Node.js</li>
                <li>Express</li>
                <li>TypeScript</li>
                <li>PostgreSQL</li>
            </ul>
        </section>

        <section className='stack-grid-mobile'>
            <header>📱 Mobile</header>

            <ul className="stack-tech-list">
                <li>React Native</li>
                <li>Expo</li>
                <li>Swift</li>
                <li>Kotlin</li>
            </ul>  
        </section>

        <section className='stack-grid-ia'>
            <header> 🤖 IA-Automatización</header>

                <ul className="stack-tech-list">
                    <li>LangChain</li>
                    <li>RAG</li>
                    <li>Pinecone</li>
                    <li>Airbyte</li>
                </ul>
        </section>
      </div>
    </section>
  );
}

export default Stack;
