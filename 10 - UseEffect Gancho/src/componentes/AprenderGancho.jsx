import { useState, useEffect } from 'react'

export const AprenderGancho = () => {
  const [contar, setContar] = useState(0)
  const [aleatorioNum, setAleatorioNum] = useState(0)

  const aumentarContar = () => {
    setContar(contar + 1)
  }

  const gerarAleatorioNum = () => {
    const numero = Math.floor(Math.random() * 100)
    setAleatorioNum(numero)
  }

  // Executa toda vez que "contar" muda
  useEffect(() => {
    console.log('O contador mudou para:', contar)
  }, [contar])

  // Executa toda vez que "aleatorioNum" muda
  useEffect(() => {
    console.log('Novo número aleatório:', aleatorioNum)
  }, [aleatorioNum])

  return (
    <>
      <h1>Contar: {contar}</h1>
      <button onClick={aumentarContar}>Aumentar Contar</button>
      <hr />

      <h1>Aleatório número: {aleatorioNum}</h1>
      <button onClick={gerarAleatorioNum}>Gerar número</button>
    </>
  )
}
