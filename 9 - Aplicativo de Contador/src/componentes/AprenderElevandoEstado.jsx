

const AprenderElevandoEstado = (props) => {


    const handleClick = () => {
        let stock = "ubuntu ola "
        props.getStock(stock)
    }

    
    return (
        <>
            <h1>Aprender Elevando Estado</h1>
            <button onClick={handleClick}>Cliques aqui</button>

        
        </>
    )
}

export default AprenderElevandoEstado