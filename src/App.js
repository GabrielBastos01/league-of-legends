import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario/index'
import Time from './componentes/Time';

function App() {

  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdicionado = (jogador) => {
    console.log(jogador)
    setJogadores([...jogadores,jogador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}/>
      <Time nome="Top"/>
      <Time nome="Jungler"/>
      <Time nome="Mid"/>
      <Time nome="Adc"/>
      <Time nome="Suporte"/>
    </div>
  )
}

export default App;
