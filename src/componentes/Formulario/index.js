import './Formulario.css'
import CampoTexto from '../campoTexto'
import ListaSuspensa from '../ListaSupensa';
import Botao from '../Botao';
import React, { useState } from 'react';


const Formulario = (props) => {

    
    const [nick, setNick] = useState('')
    const [main,setMain] = useState('')
    const [funcao,setFuncao] = useState('')

    const aoSalvar = (evento) =>{
    evento.preventDefault()
    props.aoJogadorCadastrado({
      nick,
      main,
      funcao
    })
    setNick('')
    setMain('')
    setFuncao('')
  }
return (
    <section className="formulario">
      <form className="infos" onSubmit={aoSalvar}>
        <h2>Informações do time</h2>
        <CampoTexto obrigatorio={true} label="Usuário" placeholder="Digite seu nick" valor={nick} aoAlterado={valor => setNick(valor)} />
        <CampoTexto obrigatorio={true} label="Campeão" placeholder="Digite seu main" valor={main} aoAlterado={valor => setMain(valor)} />
        <ListaSuspensa obrigatorio={true} label="Função" itens={props.funcoes} valor={funcao} aoAlterado = {valor => setFuncao(valor)}/>
        <Botao className="glitch" texto="Criar" />
      </form>
    </section>
  );
  
}

export default Formulario;