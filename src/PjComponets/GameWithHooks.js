import { useEffect, useState, createRef} from 'react';

function GameWithHooks(props){
    
    
    
    
    let userInput = createRef()
    let [score, setScore] = useState(0)



        let increaseShotCounter = () => {
            console.log("yay")
            this.setState(
                (state, props) => ({
                    score: state.score + 1


                })
            )

            var youScored = new Audio('./Audio/Swish.mp3');
            youScored.play()


        }
        setScore(
            (state, props) => ({
                shotstaken: state.shotstaken + 1

            })
        )



}



    let shotpercentage = 0

    if (this.state.shotstaken > 0) {
        shotpercentage = Math.round((this.state.score / this.state.shotstaken) * 100)
    }


    // return (
    //     <div>

    //         <h1>The {this.props.teamname}</h1>
    //         <img src={this.props.logo} alt="" className="logo" />
    //         <h2>Shots taken:{this.state.shotstaken}</h2>
    //         <h2 className='scorecounter'>Score:{this.state.score}</h2>
    //         <h2>Shot Percentage:{shotpercentage} %</h2>
    //         <button onClick={this.increaseShotCounter} className='shootbutton'>Shoot</button>

    //     </div>

    // )


    


export default GameWithHooks;