import React from 'react';
import nba from 'nba';
import { Profile } from "./Profile"
import {DataViewContainer} from "./DataViewContainer"

export class Main extends React.Component {
    state = {
        playerId: nba.findPlayer('Stephen Curry').playerId,
        //Season: '2013-14',
        //playerId: 1503,
        playerInfo: {}
    }

    componentDidMount() {
        nba.stats.playerInfo({ PlayerID: this.state.playerId}).then((info) => {
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
                <DataViewContainer playerId={this.state.playerId}/>
            </div>
        );
    }
}