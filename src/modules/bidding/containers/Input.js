import { connect } from 'react-redux';
import {
  enabledBids,
} from '../selectors';
import {
  placeBid,
} from '../actions';
import Input from '../components/Input';

 function mapStateToProps(state) {
   return {
     enabledBids: enabledBids(state),
   };
 }

 function mapDipstachToProps(dispatch) {
   return {
     callback(bid) {
       dispatch(placeBid(bid));
     },
   };
 }

 export default connect(
   mapStateToProps,
   mapDipstachToProps,
 )(Input);
