import { connect } from 'react-redux';
import Board from '../components/Board';
import {
  enabled,
} from '../selectors';

function mapStateToProps(state) {
  return {
    enabled: enabled(state),
  };
}

export default connect(
  mapStateToProps,
)(Board);
