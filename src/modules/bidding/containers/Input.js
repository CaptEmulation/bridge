import { connect } from 'react-redux';
import {
  placeBid,
} from '../actions';
import Input from '../components/Input';

 function mapStateToProps() {
   return {};
 }

 function mapDipstachToProps(dispatch) {
   return {
     callback(bid) {
       dispatch(placeBid({
         bid,
       }));
     },
   };
 }

 export default connect(
   mapStateToProps,
   mapDipstachToProps,
 )(Input);
