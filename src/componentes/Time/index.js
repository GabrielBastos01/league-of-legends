import Jogador from '../Jogador'

import './Time.css'

const Time = (props) => {
    const css = { backgroundColor:props.corSecundaria}
    const css2 ={borderColor:props.corPrimaria,color:props.corPrimaria}
    return (
        
        (props.jogadores.length > 0 ) ? <section className='time' style={css}>
            <h3 style={css2}>{props.nome}</h3>
            {props.jogadores.map(jogador => <Jogador key = {jogador.nome}nick={jogador.nick} main={jogador.main} funcao={jogador.funcao}/>)}


        </section>
       :''
    )
}
export default Time