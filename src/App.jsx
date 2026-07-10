import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <style>{`
       

        .page-wrapper {
          background: linear-gradient(135deg, #ffe3e3 0%, #ffd1d1 100%);
          font-family: 'Montserrat', sans-serif;
          margin: 0;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 100vh;
          color: #333;
          position: relative;
          box-sizing: border-box;
        }

        .page-wrapper::before, .page-wrapper::after {
          content: "❤️";
          position: absolute;
          font-size: 30px;
          opacity: 0.2;
          animation: flutuar 6s ease-in-out infinite alternate;
        }
        .page-wrapper::before { left: 10%; top: 20%; animation-delay: 0s; }
        .page-wrapper::after { right: 10%; top: 60%; animation-delay: 3s; }

        @keyframes flutuar {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-20px) scale(1.1); }
        }

        .container {
          background-color: rgba(255, 255, 255, 0.9);
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(224, 76, 76, 0.15);
          max-width: 600px;
          width: 100%;
          text-align: center;
          backdrop-filter: blur(5px);
          box-sizing: border-box;
        }

        h1 {
          font-family: 'Caveat', cursive;
          background-color: #b3e5fc;
          color: #0277bd;
          padding: 15px;
          border-radius: 12px;
          margin-top: 0;
          font-size: 2.8rem;
          box-shadow: inset 0 0 10px rgba(0,0,0,0.05);
        }

        .texto-destaque {
          color: #d32f2f;
          font-weight: 600;
          font-size: 1.1rem;
          margin: 15px 0;
        }

        .pequenina {
          color: #C8A2C8;
          font-size: 1.2rem;
          font-weight: bold;
          margin: 15px 0;
        }

        hr {
          border: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, #e04c4c, transparent);
          margin: 20px 0;
        }

        .galeria {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
          margin: 20px 0;
        }

        .galeria img {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 12px;
          border: 4px solid #fff;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .galeria img:hover {
          transform: scale(1.05) rotate(2deg);
        }

        .link-musica {
          display: inline-block;
          margin-top: 15px;
          color: #fff;
          background-color: #ff4757;
          padding: 12px 24px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(255, 71, 87, 0.4);
          transition: all 0.3s ease;
        }

        .link-musica:hover {
          background-color: #ff6b81;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 71, 87, 0.6);
        }

        .contador-secao {
          margin-top: 25px;
          padding: 15px;
          background: #fff0f0;
          border-radius: 12px;
          border: 1px dashed #ff4757;
        }
      `}</style>

      <div className="page-wrapper">
        <div className="container">
          <h1>EU TE AMO</h1>
          
          <p title="Vc é o amor da minha vida">EU TE AMO MUITO.</p>
          <p className="texto-destaque">EU TE AMO MAIS QUE TUDO</p>
          <p className="pequenina"><small>minha pequenina ♥</small></p>
          
          <hr />

          <div className="galeria">
            <img src="/pedra-furada.jpeg" alt="NÓS" />
            <img src="/o-primeiro.jpeg" alt="NÓS" />
            <img src="/garanhuns.jpeg" alt="NÓS" />
          </div>

          <hr />

          <a className="link-musica" href="https://youtube.com" target="_blank" rel="noreferrer">
            🎵 Uma música para você vc
          </a>

          <div className="contador-secao">
            <p style={{ margin: '0 0 10px 0', fontWeight: '600' }}>
              Cliques de beijo acumulados: <span style={{ color: '#ff4757', fontSize: '1.3rem' }}>{count}</span>
            </p>
            <PainelControle somar={() => setCount(count + 1)} zerar={() => setCount(0)} />
          </div>
        </div>
      </div>
    </>
  )
}

function PainelControle({ somar, zerar }) {
  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
      <button 
        onClick={somar} 
        style={{ 
          padding: '8px 16px', 
          backgroundColor: '#2ecc71', 
          color: 'white', 
          border: 'none', 
          borderRadius: '20px', 
          cursor: 'pointer',
          fontWeight: '600'
        }}
      >
        DAR BEIJO +1
      </button>
      <button 
        onClick={zerar} 
        style={{ 
          padding: '8px 16px', 
          backgroundColor: 'firebrick', 
          color: 'white', 
          border: 'none', 
          borderRadius: '20px', 
          cursor: 'pointer',
          fontWeight: '600'
        }}
      >
        Zerar
      </button>
    </div>
  )
}

export default App
