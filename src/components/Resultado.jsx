import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Texto = styled.div`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Precio = styled.div`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`
const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
    return (
        <Contenedor>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
            <div>
                <Precio>Precio: {PRICE}</Precio>
                <Texto>Precio mas alto del día: {HIGHDAY}</Texto>
                <Texto>Precio mas bajo del día: {LOWDAY}</Texto>
                <Texto>Variación ultimas 24 Horas: {CHANGEPCT24HOUR}</Texto>
                <Texto>Última Actualización: {LASTUPDATE}</Texto>
            </div>
        </Contenedor>
    )
}

export default Resultado