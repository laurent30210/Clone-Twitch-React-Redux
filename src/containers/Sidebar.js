import { connect } from 'react-redux';
import Sidebar from 'src/components/Sidebar';

import { openMenuActived, changeValue } from 'src/store/actions';

const mapStateToProps = (state) => ({
  liveStreamsList: state.streamsReducer.liveStreamsList,
  menuActived: state.globalReducer.menuActived,
  value: state.globalReducer.sidebarValue,
});

const mapDispatchToProps = (dispatch) => ({
  handleMenuActived: () => {
    dispatch(openMenuActived());
  },
  onChangeInput: (value, name) => {
    dispatch(changeValue(value, name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
