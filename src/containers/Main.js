import { connect } from 'react-redux';
import Main from 'src/components/Main';

const mapStateToProps = (state) => ({
  loaderLive: state.globalReducer.loaderLive,
  loaderTop: state.globalReducer.loaderTop,
  loaderCat: state.globalReducer.loaderCat,
  loaderChannel: state.globalReducer.loadeloaderChannelr,
  menuActived: state.globalReducer.menuActived,
});

export default connect(mapStateToProps)(Main);
