import { connect } from 'react-redux';
import SectionCatStreamers from 'src/components/Main/SectionCatStreamers';

const mapStateToProps = (state) => ({
  catStreamsList: state.streamsReducer.catStreamsList,
  viewers: state.streamsReducer.viewersByChannel,
});

export default connect(mapStateToProps)(SectionCatStreamers);
