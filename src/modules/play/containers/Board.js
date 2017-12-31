import { connect } from 'react-redux';
import {
  selectors as biddingSelectors,
} from '../../bidding';
import Board from '../components/Board';

function mapStateToProps(state) {
  return {
    enabled: !biddingSelectors.enabled(state),
  }
}

export default connect(mapStateToProps)(Board);
