import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

export default class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        { missions.map((mi) => (
          <ul key={ mi.name }>
            <MissionCard
              name={ mi.name }
              year={ mi.year }
              country={ mi.country }
              destination={ mi.destination }
            />
          </ul>))}
      </div>
    );
  }
}
