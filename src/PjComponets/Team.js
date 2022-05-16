import React, { Component } from 'react'



class Team extends Component {

    constructor(props) {
        super(props)
        this.state = {

            shotstaken: 0,
            score: 0
        }

    }

    //alternatively you can do this to set the initial state instead of the construcot stuff above

    // state = {
    //     shotstaken: 0,
    //     score: 0
    // }

    increaseShotCounter = () => {
        console.log("the button has been pressed")

        this.setState(
            (state, props) => ({
                shotstaken: state.shotstaken + 1

            })
        )



        if (Math.random() > .5) {
            console.log("yay")
            this.setState(
                (state, props) => ({
                    score: state.score + 1
                })
            )

        }






    }



render() {

    let shotpercentage = 0

    if (this.state.shotstaken > 0) {
        shotpercentage = Math.round((this.state.score / this.state.shotstaken) * 100)
    }


    return (
        <div>
           
            <h1>The {this.props.teamname}</h1>
            <img src={this.props.logo} alt="" className="logo" />
            <h2>Shots taken:{this.state.shotstaken}</h2>
            <h2 className='scorecounter'>Score:{this.state.score}</h2>
            <h2>Shot Percentage:{shotpercentage} %</h2>
            <button onClick={this.increaseShotCounter} className='shootbutton'>Shoot</button>

        </div>

    )
}
}


export default Team


