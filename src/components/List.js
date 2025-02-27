import Item from "./item"

function List(){
    return(
        <>   
            <h1> Minha lista</h1>
            <ul>
                <Item marca='fiat' ano_lancamento={1985}/>
                <Item marca='honda' ano_lancamento={1987}/>
                <Item marca={2413} ano_lancamento={1987}/>
            </ul>
        </>

    )
}

export default List