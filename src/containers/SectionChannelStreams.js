import { connect } from 'react-redux';
import SectionChannelStreams from 'src/components/Main/SectionChannelStreams';

const mapStateToProps = (state) => ({
  streams: state.streamsReducer.channelStream,
});

export default connect(mapStateToProps)(SectionChannelStreams);
