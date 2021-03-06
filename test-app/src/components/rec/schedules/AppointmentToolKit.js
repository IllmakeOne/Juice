import React from 'react';

// import Globalize from 'globalize';



export default class AppointmentTooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data.appointmentData
    };
    // Globalize.locale('en');
  }

  render() {
    const info = this.state
    return (
      <div className="movie-tooltip">
        <div className="movie-info">
        {console.log("dadaaa")}
          <div>
            Field: {info.area} 
          </div>
          <div className="movie-title">
            Admin: {info.admin}
          </div>
          <div>
            Person: {info.person}
          </div>
          <div>
            Phone Number: {info.phone} 
          </div>
        </div>
      </div>
    );
  }
}