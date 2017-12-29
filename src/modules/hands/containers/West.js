import { connect } from 'react-redux';
import {
  westCards,
} from '../selectors';
import Board from '../components/West';

function mapStateToProps(state) {
  const cards = westCards(state);

  return {
    cards,
  };
}

export default connect(
  mapStateToProps,
)(Board);
