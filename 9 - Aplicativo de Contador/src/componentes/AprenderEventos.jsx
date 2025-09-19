

const AprenderEventos = () => {
       const handleClick = () => {
        console.log("Botão Clicado!")
       }

       const handleClickAgain = (param) => {
        console.log(param)
        
       }
    
    return (
        <>
            <button onClick={handleClick}>Clique aqui</button>
            <br />
            <button onClick={() => handleClickAgain("Clique aqui novamente")}>Clique aqui novamente</button>

        </>
    )
}


export default AprenderEventos