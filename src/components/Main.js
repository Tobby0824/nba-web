import React from 'react';
import nba from 'nba';
import { Profile } from "./Profile"
import {DataViewContainer} from "./DataViewContainer"

export class Main extends React.Component {
    state = {
        //playerId: nba.findPlayer('Stephen Curry').playerId,
        //Season: '2013-14',
        //playerId: 1503,
        playerInfo: {
            playerId: nba.findPlayer('Stephen Curry').playerId,
            teamAbbreviation: 'GSW',
        }
    }

    componentDidMount() {
        nba.stats.playerInfo({ PlayerID: nba.findPlayer('Stephen Curry').playerId}).then((info) => {
            // merge two objects of info
            const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
            console.log(playerInfo);
            this.setState({ playerInfo });
        });

    }

    render() {
        return(
            <div className="main">
                <Profile playerInfo={this.state.playerInfo}/>
                <DataViewContainer playerId={this.state.playerInfo.playerId}/>
            </div>
        );
    }
}