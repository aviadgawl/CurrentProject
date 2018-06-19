// Import component style.
import './statusRing.style.css';

// Import general modules.
import * as React from 'react';
import * as $ from 'jquery';

interface statusRingProps { progression: number, maxProgression: number };
interface statusRingStatus { };

export default class StatusRing extends React.Component<statusRingProps, statusRingStatus>{
    private percent: number;
    private deg: number;

    constructor(props: statusRingProps) {
        super(props);

        this.percent = this.calculatePrecent(props.progression , props.maxProgression);
        this.deg = 360 * this.percent / 100;
    }

    calculatePrecent(progression:number , maxProgression:number):number{
        let resultPrecent:number = 0;
        let calculatedPrecent = progression / maxProgression;

        if(calculatedPrecent >= 1){
            resultPrecent = 100;
        }
        else{
            resultPrecent = calculatedPrecent * 100;
        }

        return resultPrecent;
    }
    render() {
        return <div>

            <div className={this.percent > 50 ? 'circle-graph gt-50' : 'circle-graph'} data-circle-graph>
                <div className="circle-graph-progress">
                    <div className="circle-graph-progress-fill" style={{ transform: `rotate(${this.deg}deg)` }}></div>
                </div>
                <div className="circle-graph-percents">
                    <div className="circle-graph-percents-wrapper">
                        <span className="circle-graph-percents-number">{this.percent}%</span>
                        <span className="circle-graph-percents-units">of 100</span>
                    </div>
                </div>
            </div>

        </div>
    }
}


