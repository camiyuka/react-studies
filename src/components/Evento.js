import Button from "./Button"

function Evento(){

    function primeiroEvento(){
        console.log(`ativando primeiro evento`)

    }

    function segundoEvento(){
        console.log('ativando segundo evento')
    }

    return(
        <div> 
            <p> Clique para disparar um evento: </p>
            <Button event={primeiroEvento} text='primeiro evento'>botão</Button>
            <Button event={segundoEvento} text='segundo evento'>botão</Button>

        </div>
    )
}

export default Evento