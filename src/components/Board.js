import React from 'react'
import Square from '../components/Square'

export default class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
          player: true,
          squares : Array(9).fill(null),
          result: "",
          playerX: "X",
          playerO: "O", 
        }
    }

    changeValue = (i) => {
        let newState = [...this.state.squares]
        
        if(newState[i] === null) {
        newState[i] = this.state.player ? this.state.playerX : this.state.playerO
        this.setState({
            squares: newState, 
            player: !this.state.player
        })
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          for (let i = 0; i < lines.length; i++) {
                const [a, b, c] = lines[i];
                if (newState[a] && newState[a] === newState[b] && newState[a] === newState[c]) {
                    this.setState({
                        result: `${newState[a]} player wins`
                        })
            }
          }
     }
    }

  
    render() {
      const squareValues = this.state.squares.map((item, i) => {
        return <Square i = {i} changeValue={this.changeValue} value={this.state.squares[i]}/>
      })
  
      return (
        <React.Fragment>
             
          <div className="status h2 text-center">{this.state.player ? "Next player: X" : "Next player: O"}</div> {/*ternary operator para saber que jugador le toca. Si es true X y si es false O*/}
          <div className="board">
            {squareValues}
          </div>
          <button onClick={() => this.setState({
                squares : Array(9).fill(null)
            })}>Restart Game</button>
            <h2>{this.state.result}</h2>
        </React.Fragment>
      );
    }
  }