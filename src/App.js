import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario/index'
import Time from './componentes/Time';
import Jogador from './componentes/Jogador';

function App() {

  const times = [
    {
      nome:'Top',
      corPrimaria:'#3d43b4',
      corSecundaria:'#1ade49',
    },
    {
      nome:'Jungler',
      corPrimaria:'#de004e',
      corSecundaria:'#321450',
    },
    {
      nome:'Mid',
      corPrimaria:'#0b468c',
      corSecundaria:'#ac61b9',
    },
    {
      nome:'Adc',
      corPrimaria:'#65dc98',
      corSecundaria:'#222035',
    },
    {
      nome:'Sup',
      corPrimaria:'#85ebd9',
      corSecundaria:'#2f404d',
    }
  ]
  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdicionado = (jogador) => {
   
    setJogadores([...jogadores,jogador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario funcoes={times.map(time => time.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)} />
      {times.map(time => <Time key={time.nome}
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      jogadores={jogadores.filter(jogador => jogador.funcao === time.nome)}

      />)}
    </div>
  )
}

export default App;
