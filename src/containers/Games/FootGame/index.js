import { connect } from 'react-redux';
// == Import : local
import { shootValue } from '../../../actions/game';
import FootGame from '../../../components/Games/FootGame';


const mapStateToProps = null;

const mapDispatchToProps = (dispatch)=> ({
  shootValue: (value) => {
    dispatch(shootValue(value));
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(FootGame);