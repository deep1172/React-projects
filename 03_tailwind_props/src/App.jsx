
import './App.css'
import Card from './components/Card'
function App() {
  let myObj = {
    username: "Deepak",
    age:21
  }

  return (
    <>
     <h1 className='bg-blue-900 text-white p-4 rounded-lg mb-4'> Chai Aur React</h1>
     <Card username="Rani" someobj={myObj}/>
     <Card username="Razia" someobj={myObj}/>
     <Card username="Raasi" someobj={myObj}/>
     <Card username="Radha" someobj={myObj}/>
    </>
  )
}

export default App
