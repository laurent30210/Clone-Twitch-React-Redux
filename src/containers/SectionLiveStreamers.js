import { connect } from 'react-redux';
import SectionliveStreamers from 'src/components/Main/SectionLiveStreamers';

const mapStateToProps = (state) => ({
  liveStreamsList: state.streamsReducer.liveStreamsList,
});

export default connect(mapStateToProps)(SectionliveStreamers);
