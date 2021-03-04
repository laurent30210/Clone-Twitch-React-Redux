import { connect } from 'react-redux';
import SectionTopStreamers from 'src/components/Main/SectionTopStreamers';

const mapStateToProps = (state) => ({
  streams: state.streamsReducer.liveStreamsList,
  loaderTop: state.globalReducer.loaderTop,
});

export default connect(mapStateToProps)(SectionTopStreamers);
