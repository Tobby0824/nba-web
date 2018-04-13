import React from 'react';
import { ShotChart } from "./ShotChart";
import { CountSlider} from "./CountSlider";
import { Radio } from 'antd';
const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        chartType: 'hexbin',
    }

    onCountSliderChange = (count) => {
        this.setState({ minCount: count});
    }

    onChartTypeChange = (e) => {
        console.log(e.target.value);
        this.setState({chartType: e.target.value});
    }

    render() {
        return (
            <div className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={this.state.minCount}
                    chartType={this.state.chartType}/>
                <div className = "filters">
                    <CountSlider onCountSliderChange={this.onCountSliderChange}/>

                    <RadioGroup onChange={this.onChartTypeChange} value={this.state.chartType}>
                        <Radio value={"hexbin"}>Hexbin</Radio>
                        <Radio value={"scatter"}>Scatter</Radio>
                    </RadioGroup>
                </div>

            </div>
        );
    }
}