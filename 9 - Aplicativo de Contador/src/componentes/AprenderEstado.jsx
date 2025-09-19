import {useState} from 'react'


const AprenderEstado = () => {
    const [num, setNum] = useState(5)
    console.log(num);

    const handleNum = () => {
        setNum(10)

    }

    const [estoquePreco, setEstoquePreco] = useState({estoque: 'EUR/USD', preco: 100})
    console.log(estoquePreco);

    const updateEstoquePreco = () =>{
        setEstoquePreco({...estoquePreco, preco: 200})

    }
    return (
        <>
        <h2>Numero: {num}</h2>
        <button onClick={handleNum}>clique aqui</button>
        <hr />
        <h2>{estoquePreco.estoque}: {estoquePreco.preco}</h2>
        <button onClick={updateEstoquePreco}> Clique aqui</button>
        </>
    )
}

export default AprenderEstado