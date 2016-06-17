import React from 'react';

export default class Profile extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const profileObj = this.props.profileData;
    return <div>
      <div className="profileImg"><img className="img-circle center-block" src={profileObj.picture} width="200"/></div>
      <h1 className="text-center">{profileObj.name}</h1>
      <h2 className="text-center">{profileObj.label}</h2>
      <div className="divider"></div>
      <ul className="list-unstyled contact-links text-center">
        <li><i
          className="fa fa-lg fa-location-arrow"></i>{profileObj.location.city}, {profileObj.location.region}, {profileObj.location.countryCode}
        </li>
        <li><i className="fa fa-lg fa-envelope"></i><a href={'mailto:' + profileObj.email}>{profileObj.email}</a></li>
      </ul>
      <div className="divider"></div>
      <ul className="profileLinks list-inline text-center">
          {profileObj.profiles.map(function (profile) {
            return (
              <li>
                <a className={'fa ' + profile.icon + ' fa-1x'} href={profile.url}></a>
              </li>
            )
          })}
      </ul>
      <div className="divider"></div>
      <p>I built this site with <a href="https://facebook.github.io/react/">React</a> components and a <a
        href="https://jsonresume.org/schema/">JSON Resume Schema</a>. The full source code can be found in <a
        href="https://github.com/vrtxf/React-Resume-ES6">my Github repo</a>.</p>
    </div>
  }
};
