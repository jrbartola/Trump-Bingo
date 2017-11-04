import React from 'react';

import Navbar from './Navbar.jsx';
import LexBox from './LexBox.jsx';

class InfoPane extends React.Component {
	constructor(props) {
		super(props);

		this.rotateArray = this.rotateArray.bind(this);

		this.state = {
		    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September",
		             "October", "November", "December"]
		}
	}

	render() {

	    const remainingFraction = (this.props.selected.remaining / 30.0) * 100;
	    const remainingColor = remainingFraction <= 17.0 ? "red" : (remainingFraction <= 33.0 ? "orange" : "");


	    const remainingStyle = {width: remainingFraction + "%",
	                            backgroundColor: remainingColor + " !important"};

	    const today = new Date().getDay();
	    const streaks = this.rotateArray(today);

	    console.log(this.props.selected);

		return (
			<div id="infopane">
              <Navbar outer={false} selected={this.props.selected} />
              <div className="info-body">

                  <div className="card panel blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">Remaining
                      <i className="material-icons right right-padding">bubble_chart</i>
                      </span>
                      <p>{this.props.selected.remaining} out of 30</p>
                    </div>
                    <div className="card-action">
                      <div className="progress">
                        <div className="determinate" style={remainingStyle}></div>
                      </div>
                    </div>
                  </div>

                  <div className="card panel blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">Last Fill
                      <i className="material-icons right right-padding">access_time</i>
                      </span>
                      <p>{this.state.months[this.props.selected.month] + " " + this.props.selected.day}</p>
                    </div>
                    <div className="card-action">
                      <div className="progress">
                        <div className="determinate" style={{width: "90%"}}></div>
                      </div>
                    </div>
                  </div>

                  <div className="card panel-large blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">Streak
                        <div className="streak">
                          {streaks.map((s, i) =>
                            <div key={i + "str"} style={{backgroundColor: Math.random() <= 0.5 ? "red" : ""}}>
                              <p>{s}</p>
                            </div>
                          )}
                        </div>
                      </span>
                      <p>{this.props.selected.fill}</p>
                    </div>
                    <div className="card-action">
                      <div className="progress">
                        <div className="determinate" style={{width: "90%"}}></div>
                      </div>
                    </div>
                  </div>


              </div>
              <LexBox />
			</div>
		)
	}

	rotateArray(n) {
	    const k = n % 7;
	    let arr = new Array(7);

	    for (let i = 0; i < 7; i++) {
	      arr[i] = this.state.days[(k + i) % 7];
	    }

	    return arr;

	}

}

export default InfoPane;