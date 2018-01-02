import { connect } from 'react-redux';
import {
  sortedWestCards,
} from '../selectors';
import Board from '../components/West';

function mapStateToProps(state) {
  const cards = sortedWestCards(state);

  return {
    cards,
  };
}

export default connect(
  mapStateToProps,
)(Board);
