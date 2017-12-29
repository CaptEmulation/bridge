import { connect } from 'react-redux';
import {
  northCards,
} from '../selectors';
import NorthBoard from '../components/North';

function mapStateToProps(state) {
  const cards = northCards(state);

  return {
    cards,
  };
}

export default connect(
  mapStateToProps,
)(NorthBoard);
