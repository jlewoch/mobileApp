import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import colors from '../../constants/colors';
export default class DateSelector extends Component {
  calendar = createRef();
  state = {
    selectedDate: null,
    nextTitle: '',
    previousTitle: '',
  };
  componentDidMount() {
    //   sets the inital next and previous button labels
    this._onMonthChange(moment());
  }

  render() {
    const {selectedDate, previousTitle, nextTitle} = this.state;
    const {availableDates, disabledDates} = this.props;
    const minDate = moment(); // Today
    const maxDate = moment().add(1, 'years'); // max 1 year

    return (
      <View style={styles.container} testID="dateSelectorWrapper">
        <CalendarPicker
          testID="dateSelectorComponent"
          ref={this.calendar}
          onMonthChange={this._onMonthChange}
          minDate={minDate}
          maxDate={maxDate}
          previousTitle={previousTitle}
          nextTitle={nextTitle}
          todayTextStyle={{
            color: colors.white,
            fontWeight: 'bold',
          }}
          todayBackgroundColor={colors.accentOrange}
          selectedDayColor={colors.white}
          selectedDayTextColor={colors.main}
          selectedDayStyle={{
            backgroundColor: colors.white,
            borderStyle: 'solid',
            borderColor:
              moment(selectedDate).format('L') === minDate.format('L')
                ? colors.accentOrange
                : colors.main,
            borderWidth: 1,
          }}
          disabledDates={disabledDates}
          customDatesStyles={availableDates}
          onDateChange={this._onDateChange}
        />
      </View>
    );
  }

  // handles action when the next or previous buttons are pressed
  _onMonthChange = instance => {
    //   does not allow user to navigate to any months that are before the current month
    if (instance.isBefore(moment().startOf('month')))
      return this.calendar.current.setState({currentMonth: moment().month()});

    //   otherwise update next and previous labels
    this.setState({
      nextTitle: instance.add(1, 'month').format('MMMM'),
      previousTitle: instance.subtract(2, 'month').format('MMMM'),
    });
  };
  // handles any date selections
  _onDateChange = (date, type) => {
    this.setState({
      selectedDate: date.format('L'),
    });
  };
}

DateSelector.propTypes = {
  disabledDates: PropTypes.arrayOf(PropTypes.string),
  availableDates: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date),
        PropTypes.instanceOf(moment),
      ]),
      style: PropTypes.object,
      textStyle: PropTypes.object,
    }),
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
//   function for backend to send dates
//   _arangeDates = dates => {
//     let today = moment();
//     // subtract one so it includes today in the while loop
//     let day = today.clone().subtract(1, 'days');
//     // available dates and will be selectable
//     const customDatesStyles = [];
//     // dates that are not available
//     const disabledDates = [];
//     while (day.add(1, 'day').isSame(today, 'month')) {
//       // check if dates Object has the key of curent day being checked
//       if (dates[day.format('L')]) {
//         customDatesStyles.push({
//           date: day.clone(),
//           style: {
//             backgroundColor: colors.main,
//           },
//           textStyle: {color: colors.white, fontWeight: 'bold'},
//         });
//       } else {
//         //   disable if it is not in the passed available object
//         disabledDates.push(day.clone());
//       }
//     }
//     // set state with new values to pass to the calendar
//     this.setState({customDatesStyles, disabledDates});
//   };
