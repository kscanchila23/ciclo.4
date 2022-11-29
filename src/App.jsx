import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Login } from './componentes/login'
import { Barra } from './componentes/barra'
import { Registro } from './componentes/Registro'
import { Tabla } from './componentes/Tabla'

function App() {
  const [count, setCount] = useState(0)

  return (
    
<>
<Barra/>
<Login/>
<Registro/>
<Tabla/>
</>
 
 
   )
 }
 
 export default App
