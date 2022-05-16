import React, { Component } from "react";
import Team from './Team'
import TeamTwoLogo from './images/Gonzo.jpg'


class Game extends Component {


    state = {
    
    
    }





    render() {
        return (
            <div className="Game">
                <Team
                    teamname="Tigers"
                    logo="https://cdn.logojoy.com/wp-content/uploads/2018/05/30161552/8_big16-768x591.png"
                />
                <img src="https://www.nicepng.com/png/full/20-200345_street-fighter-vs-png-vs-street-fighter-logo.png"
                    alt="" className='versusPic' />

                <Team
                    teamname="Gonzos"
                    logo={TeamTwoLogo}
                />

            </div >


        )
    }
}




export default Game