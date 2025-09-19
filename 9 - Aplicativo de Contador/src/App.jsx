import OlaMundo from "./componentes/OlaMundo"
import AprenderReact from "./componentes/AprenderReact"
import AprenderJSX from "./componentes/AprenderJSX"
import AprenderAderescos from "./componentes/AprenderAderecos"
import AprenderEventos from "./componentes/AprenderEventos"
import AprenderElevandoEstado from "./componentes/AprenderElevandoEstado"
import AprenderEstado from "./componentes/AprenderEstado"
import ApplicativoContador from "./componentes/AplicativoContador"





function App() {

  const getStock = (data) => {
    console.log(data)
  }

  return (
    <>
      {/* <h1>Componente de aplicativo </h1> */}
      {/* <OlaMundo /> */}
      {/* <AprenderReact /> */}
      {/* <AprenderJSX /> */}
      {/*<AprenderAderecos stock="ubuntu" />*/}
      {/*<AprenderEventos />*/}
      {/*<AprenderElevandoEstado getStock={getStock} />*/}
      {/*<AprenderEstado />*/}
      <ApplicativoContador/>
      

    </>
  )
}

export default App
