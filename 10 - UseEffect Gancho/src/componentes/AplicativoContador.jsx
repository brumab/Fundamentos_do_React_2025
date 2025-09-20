import React, { useState } from "react"

const ApplicativoContador = () => {

    const [count, setCount] = useState(0)

    const IncrementarContador = () => {
        setCount(count + 1);

    }

    const ZerarContador = () => {
        setCount(count - 1);
    }
    const ResetarContador = () => {
        setCount(0);
    }

    return (
        <>
        <h1>Aplicativo de Contador</h1>
        <h2>Contador: {count}</h2>
        <button onClick={IncrementarContador}>Incrementar</button>
        <button onClick={ZerarContador}>Zerar</button>
        <button onClick={ResetarContador}>Resetar</button>
        </>

    )

}
export default ApplicativoContador