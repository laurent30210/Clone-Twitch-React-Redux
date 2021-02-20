import { connect } from 'react-redux';
import SectionCatStreamers from 'src/components/Main/SectionCatStreamers';

const mapStateToProps = (state) => ({
  catStreamsList: state.streamsReducer.catStreamsList,
});

export default connect(mapStateToProps)(SectionCatStreamers);
