import { connect } from 'react-redux';
import {
  sortedNorthCards,
} from '../selectors';
import NorthBoard from '../components/North';

function mapStateToProps(state) {
  const cards = sortedNorthCards(state);

  return {
    cards,
  };
}

export default connect(
  mapStateToProps,
)(NorthBoard);
