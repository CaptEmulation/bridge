import { connect } from 'react-redux';
import {
  southCards,
} from '../selectors';
import SouthBoard from '../components/South';

function mapStateToProps(state) {
  const cards = southCards(state);

  return {
    cards,
  };
}

export default connect(
  mapStateToProps,
)(SouthBoard);
