import { connect } from 'react-redux';
import {
  startingBid,
  bids,
} from '../selectors';
import Log from '../components/Log';

function mapStateToProps(state) {
  return {
    bids: bids(state),
    startingBid: startingBid(state),
  };
}

export default connect(
  mapStateToProps,
)(Log);
