import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return(
        <>
            <li> {marca} - {ano_lancamento} </li>
            <p> teste teste texto </p>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number
}

export default Item