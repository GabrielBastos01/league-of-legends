import './Jogador.css'

const Jogador = (props) => {
    let lanes;

    if(props.funcao === 'Top'){
        lanes = '/top.png'
    }else if(props.funcao === 'Jungler'){
        lanes =  '/Jungler.png'
    }else if(props.funcao === 'Mid'){
        lanes = '/mid.png'
    }else if(props.funcao === 'Adc'){
        lanes = '/adc.png'
    }else if(props.funcao === 'Sup'){
        lanes = '/sup.png'

    }
    return (<div>
        <div>
        <img src={lanes} alt=''/>
        </div>
        <div>
            <h4>{props.nick}</h4>
            <h5>{props.funcao}</h5>
            <h6>{props.main}</h6>
        </div>
    </div>)
}

export default Jogador