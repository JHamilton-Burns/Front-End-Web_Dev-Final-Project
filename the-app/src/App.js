import React from "react";
import FootSteps from "./FootSteps.js";
import MapFlap from "./MapFlap.js";
import MapSide from "./MapSide.js";

import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  toggleMap = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };


  render() {
    return (
      <div className="App">
        <div className="main-content">
          <div className={this.state.active ? "map-base active" : "map-base"}>
            <FootSteps name="Peter" number={1} url = "https://www.colorado.edu/atlas/peter-rosenthal" />
            <FootSteps name="Dr.Z" number={2} url = "https://www.colorado.edu/atlas/shaz-zamore" />
            <FootSteps name="Jill" number={3} url = "https://www.colorado.edu/atlas/jill-van-matre-dupre" />
            <MapFlap number={1} />
            <MapFlap number={2} />
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
        </div>
      </div>
    );
  }
}

//           <div onClick={this.toggleMap}>
//             <div className={this.state.active ? "map-floor2 active" : "map-floor2"}>
//               <FootSteps name="Peter" number={1} url = "https://www.colorado.edu/atlas/peter-rosenthal" />
//               <FootSteps name="Dr.Z" number={2} url = "https://www.colorado.edu/atlas/shaz-zamore" />
//               <MapFlap number={1} />
//               <MapFlap number={2} />
//               <MapSide side={1} map={83} isback={true} />
//               <MapSide side={2} map={183} isback={true} />
//               <div onClick={this.toggleMap}>
//               <MapSide side={3} map={7} isback={true} />
//               <MapSide side={4} map={10} isback={false} />
//               <MapSide side={4} map={10} isback={false} />
//               <MapSide side={5} map={6} isback={true} />
//               <MapSide side={6} map={11} isback={true} />
//               </div>
//             </div>
//           </div>

//             <div onClick={this.toggleMap}>
//               <div className={this.state.active ? "map-b2 active" : "map-b2"}>
//                 <FootSteps name="Peter" number={1} url = "https://www.colorado.edu/atlas/peter-rosenthal" />
//                 <FootSteps name="Dr.Z" number={2} url = "https://www.colorado.edu/atlas/shaz-zamore" />
//                 <MapFlap number={1} />
//                 <MapFlap number={2} />
//                 <MapSide side={1} map={81} isback={true} />
//                 <MapSide side={2} map={181} isback={true} />
//                 <div onClick={this.toggleMap}>
//                 <MapSide side={3} map={7} isback={true} />
//                 <MapSide side={4} map={10} isback={false} />
//                 <MapSide side={4} map={10} isback={false} />
//                 <MapSide side={5} map={6} isback={true} />
//                 <MapSide side={6} map={11} isback={true} />
//                 </div>
//               </div>
//             </div>

//           <div onClick={this.toggleMap}>
//             <div className={this.state.active ? "map-b1 active" : "map-b1"}>
//               <FootSteps name="Peter" number={1} url = "https://www.colorado.edu/atlas/peter-rosenthal" />
//               <FootSteps name="Dr.Z" number={2} url = "https://www.colorado.edu/atlas/shaz-zamore" />
//               <MapFlap number={1} />
//               <MapFlap number={2} />
//               <MapSide side={1} map={82} isback={true} />
//               <MapSide side={2} map={182} isback={true} />
//               <div onClick={this.toggleMap}>
//               <MapSide side={3} map={7} isback={true} />
//               <MapSide side={4} map={10} isback={false} />
//               <MapSide side={4} map={10} isback={false} />
//               <MapSide side={5} map={6} isback={true} />
//               <MapSide side={6} map={11} isback={true} />
//               </div>
//             </div>
//           <div onClick={this.toggleMap}>

// 