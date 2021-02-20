import { connect } from 'react-redux';
import App from 'src/components/App';

import { getStreamFromAPI } from 'src/store/actions';

const mapDispatchToProps = (dispatch) => ({
  loadStreams: () => {
    console.log('titie');
    dispatch(getStreamFromAPI());
  },
});
export default connect(null, mapDispatchToProps)(App);
