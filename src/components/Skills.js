import React from 'react';

export default class Skills extends React.Component {

  render() {

  	return (
  	  <section className="skills">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-code"></i> Skills</h2>
        {this.props.skillsData.map(function(item, id) {
          return (
            <div key={id}>
              <h3>{item.name}</h3>
              <ul className="skills-list list-inline">{item.keywords.map(function(skill, id) {
                return (
                  <li key={id}><span className="label label-primary">{skill}</span></li>
                )
              })}</ul>
            </div>
          )
        })}
      </section>
  	)

  }

};
