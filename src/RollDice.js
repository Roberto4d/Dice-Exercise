import { Component } from "react";
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };
    constructor(props){
        super(props);
        this.state = {die1: 'one', die2: 'six', rolling: false};
        this.randomDie = this.randomDie.bind(this);
    }
    randomDie(e) {
        //set a random number
        let random1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        let random2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        //set state with new dice
        this.setState({die1: random1, die2: random2, rolling: true})
        //Wait one second, then set rolling to false
        setTimeout(()=>{
            this.setState({rolling: false})
        },1000)
    }
    render(){
        return (
            <div className="RollDice"> 
                <div className="rollDice-container">
                    <Die face={this.state.die1} rolling={this.state.rolling}/>
                    <Die face={this.state.die2} rolling={this.state.rolling}/>
                </div>
                <button onClick={this.randomDie} disabled={this.state.rolling}>{this.state.rolling ? "Rolling..." : "Roll Dice!"}</button>
            </div>
        )
    }
}

export default RollDice