import { connect } from 'react-redux';
import Header from 'src/components/Header';

import { changeValue, submitValue } from 'src/store/actions';

const mapStateToProps = (state) => ({
  value: state.globalReducer.value,
  liveStreamsList: state.streamsReducer.liveStreamsList,

});
const mapDispatchToProps = (dispatch) => ({
  onChangeInput: (value) => {
    dispatch(changeValue(value));
  },
  sendValueSubmit: () => {
    dispatch(submitValue());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
