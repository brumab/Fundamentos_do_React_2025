import React from "react";

//nst h2Element = React.createElement("h2", null, "AprenderJSX")

const AprenderJSX = () => {
    let Stock = 'ubuntu'
  return (
    <>
       <h2>JSX</h2>

       <h2>Price: {10 + 70}</h2>

       <h2>Nome da ação: {Stock}</h2>

       <h2 className='bg-success'>Classe</h2>

       <h2 className={Stock}>Classe dinâmica</h2>

    </>

  )
}

export default AprenderJSX
