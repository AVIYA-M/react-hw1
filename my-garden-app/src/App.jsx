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
        textAlign: 'center',
      }}
    >
      <img src={gardenImage} alt="הגינה שלי" width="80" />
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

function Flower({ code, flowerName, petalColor = 'ורוד', meinPetalColor = 'סגול' }) {
  const clickFlower = () => {
    alert('אני פרח מסוג ' + flowerName)
  }

  return (
    <div
      onClick={clickFlower}
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Arial, sans-serif',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: colorMap[meinPetalColor],
        backgroundColor: colorMap[petalColor],
      }}
    >
      <h2>
        {flowerName}
      </h2>
      <p>
        {petalColor} ו{meinPetalColor}
      </p>
    </div>
  )
}

const flowers = [
  {
    code: 'FLOWER-001',
    flowerName: 'חמניה',
    petalColor: 'צהוב',
    meinPetalColor: 'כתום',
  },
  {
    code: 'FLOWER-002',
    flowerName: 'ורד',
    petalColor: 'אדום',
    meinPetalColor: 'סגול',
  },
  {
    code: 'FLOWER-003',
    flowerName: 'נרקיס',
    petalColor: 'צהוב',
    meinPetalColor: 'לבן',
  },
  {
    code: 'FLOWER-004',
    flowerName: 'רקפת',
    petalColor: 'סגול',
    meinPetalColor: 'ורוד',
  },
]

function App() {
  return (
    <>
      <Header />
      {flowers.map((flower) => (
        <Flower
          key={flower.code}
          flowerName={flower.flowerName}
          petalColor={flower.petalColor}
          meinPetalColor={flower.meinPetalColor}
        />
      ))}
    </>
  )
}

export default App
