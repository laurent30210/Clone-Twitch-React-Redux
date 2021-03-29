import { connect } from 'react-redux';
import Sidebar from 'src/components/Sidebar';

import { openMenuActived, changeValue2 } from 'src/store/actions';

const mapStateToProps = (state) => ({
  liveStreamsList: state.streamsReducer.liveStreamsList,
  menuActived: state.globalReducer.menuActived,
  value2: state.globalReducer.value2,
});

const mapDispatchToProps = (dispatch) => ({
  handleMenuActived: () => {
    dispatch(openMenuActived());
  },
  onChangeInput2: (value) => {
    dispatch(changeValue2(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
