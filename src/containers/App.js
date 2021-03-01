import { connect } from 'react-redux';
import App from 'src/components/App';

import {
  getStreamFromAPI,
  getCategoryFromAPI,
} from 'src/store/actions';

const mapDispatchToProps = (dispatch) => ({
  loadStreams: () => {
    dispatch(getStreamFromAPI());
    dispatch(getCategoryFromAPI());
  },
});
export default connect(null, mapDispatchToProps)(App);
