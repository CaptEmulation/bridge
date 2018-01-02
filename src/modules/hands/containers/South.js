import { connect } from 'react-redux';
import {
  sortedSouthCards,
} from '../selectors';
import SouthBoard from '../components/South';

function mapStateToProps(state) {
  const cards = sortedSouthCards(state);

  return {
    cards,
  };
}

export default connect(
  mapStateToProps,
)(SouthBoard);
