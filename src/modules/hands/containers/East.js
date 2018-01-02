import { connect } from 'react-redux';
import {
  sortedEastCards,
} from '../selectors';
import Board from '../components/East';

function mapStateToProps(state) {
  const cards = sortedEastCards(state);

  return {
    cards,
  };
}

export default connect(
  mapStateToProps,
)(Board);
