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
const colorMap = {
  צהוב: 'yellow',
  כתום: 'orange',
  ורוד: 'pink',
  סגול: 'purple',
  ירוק: 'green',
  אדום: 'red',
  לבן: 'white',
  שחור: 'black',
}
function Flower({ flowerName, petalColor="ורוד", meinPetalColor="סגול" }) {
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
        color: colorMap[meinPetalColor],
        backgroundColor: colorMap[petalColor]
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
      <Flower flowerName="ורד" petalColor="אדום" />
      <Flower flowerName="נרקיס" meinPetalColor="לבן" />
      <Flower flowerName="רקפת" />


    </>
  )
}

export default App
