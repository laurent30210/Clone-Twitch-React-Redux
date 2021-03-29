import { connect } from 'react-redux';
import LiveStream from 'src/components/LiveStream';

import { resetSearch } from 'src/store/actions';

const mapDispatchToProps = (dispatch) => ({
  handleResetSearch: () => {
    dispatch(resetSearch());
  },
});

export default connect(null, mapDispatchToProps)(LiveStream);
