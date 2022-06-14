import { useState } from 'react';
// import Team from './Team'
// import TeamTwoLogo from './images/Gonzo.jpg'


function GameWithHooks(props) {


    let [shotstaken, setShotsTaken] = useState(0)
    let [score, setScore] = useState(0)


    let increaseShotCounter = () => {
        console.log("the button has been pressed")

        setShotsTaken(

            shotstaken + 1
        )

        if (Math.random() > .5) {

            setScore(
               score + 1
            )
        }
    }



  





    let shotpercentage = 0

    if (shotstaken > 0) {
        shotpercentage = Math.round((score / shotstaken) * 100)
    }





    return (
        <div className='GameWithHooks'>
            <h1>**********With Hooks************</h1>

            {/* <h1>The {this.props.teamname}</h1> */}
            {/* <img src={this.props.logo} alt="" className="logo" /> */}
            <h2>Shots taken:{shotstaken}</h2>
            <h2 className='scorecounter'>Score:{score}</h2>
            <h2>Shot Percentage:{shotpercentage} %</h2>
            <button onClick={increaseShotCounter} className='shootbutton'>Shoot</button>



            <div className="Game">
                {/* <Team
                    teamname="Tigers"
                    logo="https://cdn.logojoy.com/wp-content/uploads/2018/05/30161552/8_big16-768x591.png"
                />
                <img src="https://www.nicepng.com/png/full/20-200345_street-fighter-vs-png-vs-street-fighter-logo.png"
                    alt="" className='versusPic' /> */}

                {/* <Team
                    teamname="Gonzos"
                    logo={TeamTwoLogo}
                /> */}

            </div >
        </div >


    )

}






export default GameWithHooks;