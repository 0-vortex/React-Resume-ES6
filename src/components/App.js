import React from 'react';
import Profile from './Profile';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import Education from './Education';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {jsonObj: props.jsonObj};

    //ajax call to get resume file
    $.get(this.props.source, function (result) {
      this.setState({jsonObj: result});
    }.bind(this));
  }

  render() {
    if (this.state.jsonObj) {
      const jsonResume = this.state.jsonObj;
      return (
        <div className="container">
          <div className="row">
            <aside className="col-md-4 col-sm-12 col-xs-12">
              <div className="container-fluid">
                <Profile profileData={jsonResume.basics}/>
              </div>
            </aside>
            <main className="col-md-8 col-sm-12 col-xs-12">
              <div className="container-fluid">
                <About aboutData={jsonResume.basics.summary}/>
                <Work workData={jsonResume.work}/>
                <Skills skillsData={jsonResume.skills}/>
                <Education educationData={jsonResume.education}/>
              </div>
            </main>
          </div>
        </div>
      )
    } else {
      return <p>Loading...</p>
    }
  }
};

App.defaultProps = {jsonObj: null};
