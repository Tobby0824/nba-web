import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';

function onSelect(value) {
    console.log('onSelect', value);
}

export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : [
                value,
                value + value,
                value + value + value,
            ],
        });
    }

    render() {
        const { dataSource } = this.state;
        return (
            <AutoComplete
                className="search-bar"
                size="large"
                dataSource={dataSource}
                onSelect={onSelect}
                onSearch={this.handleSearch}
                placeholder="Search NBA Player"
            >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
        );
    }
}

