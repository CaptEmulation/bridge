import { connect } from 'react-redux';
import {
  bids,
} from '../selectors';
import Log from '../components/Log';

function mapStateToProps(state) {
  return {
    bids: bids(state),
  };
}

export default connect(
  mapStateToProps,
)(Log);
