import { connect } from 'react-redux';
import SectionliveStreamers from 'src/components/Main/SectionliveStreamers';

const mapStateToProps = (state) => ({
  liveStreamsList: state.todosReducer.liveStreamsList,
});

export default connect(mapStateToProps)(SectionliveStreamers);
