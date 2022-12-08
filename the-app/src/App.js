import React, { useState }from "react";
import FootSteps from "./FootSteps.js";
import MapSide from "./MapSide.js";
import stairs from "./stairs.svg";

import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      active1: false,
      active2: false,
      active3: false,

    };
  }
  toggleMap = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  changeFloors1 = () => {
    this.state = {
      active: false
    };

    const currentState = this.state.active1;
    this.setState({ active1: !currentState });

  }

  changeFloors2 = () => {
    this.state = {
      active1: false
    };

    const currentState = this.state.active1;
    this.setState({ active2: !currentState });

  }

  changeFloors3 = () => {
    this.state = {
      active2: false
    };

    const currentState = this.state.active1;
    this.setState({ active3: !currentState });

  }

  render() {
    return (
      <div className="App">
        <div className="main-content">
          <div className={this.state.active ? "map-base active" : "map-base"}>
            <div onClick={this.changeFloors1}> 
            <img src={stairs} className="staircase" alt="stairs"/>
            </div>
            <FootSteps name="Peter" number={1} url = "https://www.colorado.edu/atlas/peter-rosenthal" />
            <FootSteps name="Dr.Z" number={2} url = "https://www.colorado.edu/atlas/shaz-zamore" />
            <FootSteps name="Jill" number={3} url = "https://www.colorado.edu/atlas/jill-van-matre-dupre" />
            <MapSide side={1} map={8} isback={true} />
            <MapSide side={2} map={18} isback={true} />
            <div onClick={this.toggleMap}>
            <MapSide side={3} map={7} isback={true} />
            <MapSide side={4} map={10} isback={false} />
            <MapSide side={4} map={10} isback={false} />
            <MapSide side={5} map={6} isback={true} />
            <MapSide side={6} map={11} isback={true} />
            </div>
          </div>
          <div className={this.state.active1 ? "map-floor2 active" : "map-floor2"}>
              <div onClick={this.changeFloors2}> 
              <img src={stairs} className="staircase" alt="stairs"/>
              </div>
               <FootSteps name="Peter" number={1} url = "https://www.colorado.edu/atlas/peter-rosenthal" />
               <FootSteps name="Dr.Z" number={2} url = "https://www.colorado.edu/atlas/shaz-zamore" />
               <MapSide side={1} map={83} isback={true} />
               <MapSide side={2} map={183} isback={true} />
               <div onClick={this.toggleMap}>
               <MapSide side={3} map={7} isback={true} />
               <MapSide side={4} map={10} isback={false} />
               <MapSide side={4} map={10} isback={false} />
               <MapSide side={5} map={6} isback={true} />
               <MapSide side={6} map={11} isback={true} />
               </div>
             </div>
               <div className={this.state.active2 ? "map-b2 active" : "map-b2"}>
                <div onClick={this.changeFloors3}> 
                <img src={stairs} className="staircase" alt="stairs"/>
                </div>
                 <FootSteps name="Peter" number={1} url = "https://www.colorado.edu/atlas/peter-rosenthal" />
                 <FootSteps name="Dr.Z" number={2} url = "https://www.colorado.edu/atlas/shaz-zamore" />
                 <MapSide side={1} map={82} isback={true} />
                 <MapSide side={2} map={182} isback={true} />
                 <div onClick={this.toggleMap}>
                 <MapSide side={3} map={7} isback={true} />
                 <MapSide side={4} map={10} isback={false} />
                 <MapSide side={4} map={10} isback={false} />
                 <MapSide side={5} map={6} isback={true} />
                 <MapSide side={6} map={11} isback={true} />
                 </div>
               </div>
               <div className={this.state.active3 ? "map-b1 active" : "map-b1"}>
               <div onClick={this.changeFloors}> 
                <img src={stairs} className="staircase" alt="stairs"/>
               </div>
               <FootSteps name="Peter" number={1} url = "https://www.colorado.edu/atlas/peter-rosenthal" />
               <FootSteps name="Dr.Z" number={2} url = "https://www.colorado.edu/atlas/shaz-zamore" />
               <MapSide side={1} map={81} isback={true} />
               <MapSide side={2} map={181} isback={true} />
               <div onClick={this.toggleMap}>
               <MapSide side={3} map={7} isback={true} />
               <MapSide side={4} map={10} isback={false} />
               <MapSide side={4} map={10} isback={false} />
               <MapSide side={5} map={6} isback={true} />
               <MapSide side={6} map={11} isback={true} />
               </div>
            </div>
        </div>
        </div>
    )
  }
}
   
