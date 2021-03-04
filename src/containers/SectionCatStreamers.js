import { connect } from 'react-redux';
import SectionCatStreamers from 'src/components/Main/SectionCatStreamers';

const mapStateToProps = (state) => ({
  catStreamsList: state.streamsReducer.catStreamsList,
  channels: state.streamsReducer.channelStream,
});

export default connect(mapStateToProps)(SectionCatStreamers);
