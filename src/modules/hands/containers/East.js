import { connect } from 'react-redux';
import {
  eastCards,
} from '../selectors';
import Board from '../components/East';

function mapStateToProps(state) {
  const cards = eastCards(state);

  return {
    cards,
  };
}

export default connect(
  mapStateToProps,
)(Board);
