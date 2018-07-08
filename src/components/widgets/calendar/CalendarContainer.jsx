import React, {Component} from 'react';
import CalendarHeader from './CalendarHeader.jsx';
import CalendarGrid from './CalendarGrid.jsx';

class CalendarContainer extends Component {
  render() {
    return <div className='calendar-container'>
          <CalendarHeader month={this.props.month} />
          <CalendarGrid />
    </div>
  }
}
