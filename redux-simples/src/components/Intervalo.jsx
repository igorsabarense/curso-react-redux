import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux';
import { changeMinNumber } from '../store/actions/numeros'
import { changeMaxNumber } from '../store/actions/numeros'

function Intervalo(props) {
    const { min , max } = props;
    return (
        <Card title="Intervalo de Números" magenta>
            <div className="Intervalo">
            <span>
                <strong>Mínimo</strong>
                <input 
                  type="number"
                  value={min}
                  onChange={e => props.changeMinNumber(+e.target.value) }
                />
            </span>

            <span>
                <strong>Máximo</strong>
                <input 
                  type="number"
                  value={max}
                  onChange={e => props.changeMaxNumber(+e.target.value) }
                />
            </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
	return {
		min: state.numeros.min,
		max: state.numeros.max,
	};
}

function mapDispatchToProps(dispatch){
    return {
        changeMinNumber(newNumber){
            const min = changeMinNumber(newNumber)
            dispatch(min)
        },
        changeMaxNumber(newNumber){
            const max = changeMaxNumber(newNumber)
            dispatch(max)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Intervalo)