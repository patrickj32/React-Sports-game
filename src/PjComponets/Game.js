import TeamWithHooks from './TeamWithHooks'
import TeamTwoLogo from './images/Gonzo.jpg'


function Game(props){


   

    
        return (
            <div className="Game">
                <TeamWithHooks
                    teamname="Tigers"
                    logo="https://cdn.logojoy.com/wp-content/uploads/2018/05/30161552/8_big16-768x591.png"
                />
                <img src="https://www.nicepng.com/png/full/20-200345_street-fighter-vs-png-vs-street-fighter-logo.png"
                    alt="" className='versusPic' />

                <TeamWithHooks
                    teamname="Gonzos"
                    logo={TeamTwoLogo}
                />

            </div >


        )
    }





export default Game