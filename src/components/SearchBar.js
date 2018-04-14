import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';


export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        console.log(value);

        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map(player => player.fullName),
        });
    }

    onSelect = (playerName) => {
        console.log('onSelect', playerName);
        this.props.loadPlayerInfo(playerName);
    }

    render() {
        //window.nba = nba;
        const { dataSource } = this.state;
        return (
            <AutoComplete
                className="search-bar"
                size="large"
                dataSource={dataSource}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Search NBA Player"
            >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
        );
    }
}

