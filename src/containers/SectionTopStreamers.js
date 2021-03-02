import { connect } from 'react-redux';
import SectionTopStreamers from 'src/components/Main/SectionTopStreamers';

const mapStateToProps = (state) => ({
  streams: state.streamsReducer.liveStreamsList,
});

export default connect(mapStateToProps)(SectionTopStreamers);
