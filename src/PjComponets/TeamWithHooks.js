import { useState } from 'react';
// import Team from './Team'
// import TeamTwoLogo from './images/Gonzo.jpg'


function TeamWithHooks(props) {


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

            var youScored = new Audio('./Audio/Swish.mp3');
            youScored.play()

        }

    
    }



  





    let shotpercentage = 0

    if (shotstaken > 0) {
        shotpercentage = Math.round((score / shotstaken) * 100)
    }





    return (
        <div className='TeamWithHooks'>
            <h1>**********With Hooks************</h1>

            <h1>The {props.teamname}</h1>
            <img src={props.logo} alt="" className="logo" />
            <h2>Shots taken:{shotstaken}</h2>
            <h2 className='scorecounter'>Score:{score}</h2>
            <h2>Shot Percentage:{shotpercentage} %</h2>
            <button onClick={increaseShotCounter} className='shootbutton'>Shoot</button>




            </div >


    )

}






export default TeamWithHooks;


// 6/14/2022

// The shots, score and shot percentage are working but not in the way i want, 
// need to revaluate the shot percentage stuff