import './Formulario.css'
import CampoTexto from '../campoTexto'
import ListaSuspensa from '../ListaSupensa';

const Formulario = () => {

    const funções = [
        'Top',
        'Jungler',
        'Mid',
        'Adc',
        'Sup'
    ]
    return(
        <section class = 'formulario'>
            <form class = 'infos'>
            <h2>Informações do time</h2>
            <CampoTexto label="Usuário" placeholder="Digite seu nick"/>
            <CampoTexto label="Campeão" placeholder="Digite seu main"/>
            <ListaSuspensa label="Função"itens={funções}/>
            </form>
        </section>
    )
}

export default Formulario;