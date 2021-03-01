import { connect } from 'react-redux';
import SectionChannelStreams from 'src/components/Main/SectionChannelStreams';

const mapStateToProps = (state) => ({
  catStreamsList: state.streamsReducer.catStreamsList,
});

export default connect(mapStateToProps)(SectionChannelStreams);
