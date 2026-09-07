import './App.css'
import gardenImage from './flower-pot.png'
function Header() {
  return (
    <header
          style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        textAlign: 'center'
      }}>
      <img src={gardenImage} alt="הגינה שלי" width="80"/>
      <h1 className="garden-title">הגינה שלי</h1>
    </header>
  )
}
function Flower({ flowerName, petalColor, meinPetalColor }) {
  const Click = () => {
    alert("אני פרח מסוג " + flowerName);
  };

  return (
    <div 
      onClick={Click}
      style={{
        display: 'flex',
        flexDirection: 'column',  
        fontFamily: 'Arial, sans-serif',
        alignItems: 'center',
        justifyContent: 'center',  
        textAlign: 'center',
        color: 'orange',
        backgroundColor: 'yellow'
      }}
    >
      <h2>{flowerName}</h2>
      <p>{petalColor} {"ו" + meinPetalColor}</p>
    </div>
  );
}
function App() {
  return (
      <>
      <Header />
      <Flower flowerName="חמניה" petalColor="צהוב" meinPetalColor="כתום" />
    </>
  )
}

export default App
