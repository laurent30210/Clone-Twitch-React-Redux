import { connect } from 'react-redux';
import Sidebar from 'src/components/Sidebar';

const mapStateToProps = (state) => ({
  liveStreamsList: state.streamsReducer.liveStreamsList,
});

export default connect(mapStateToProps)(Sidebar);
