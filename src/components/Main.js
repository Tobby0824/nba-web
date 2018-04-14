import React from 'react';
import nba from 'nba';
import { Profile } from "./Profile";
import {DataViewContainer} from "./DataViewContainer";
import {SearchBar} from "./SearchBar";
import { DEFAULT_PLAYER_INFO } from "../constants"

export class Main extends React.Component {

    state = {
        //playerId: nba.findPlayer('Stephen Curry').playerId,
        //Season: '2013-14',
        //playerId: 1503,
        playerInfo: DEFAULT_PLAYER_INFO,
    }

    componentDidMount() {
        this.loadPlayerInfo(this.state.playerInfo.fullName);
    }

    loadPlayerInfo = (playerName) => {
        nba.stats.playerInfo({ PlayerID: nba.findPlayer(playerName).playerId}).then((info) => {
            // merge two objects of info
            const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
            console.log(playerInfo);
            this.setState({ playerInfo });
        });
    }

    render() {
        return(
            <div className="main">
                <SearchBar loadPlayerInfo={this.loadPlayerInfo}/>
                <div className="player">
                    <Profile playerInfo={this.state.playerInfo}/>
                    <DataViewContainer playerId={this.state.playerInfo.playerId}/>
                </div>
            </div>
        );
    }
}