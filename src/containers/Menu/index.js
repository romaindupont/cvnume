import { connect } from 'react-redux';
// == Import : local
import Menu from '../../components/Menu';
import { smallPage } from '../../actions/internet';
import { clicFile } from '../../actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch)=> ({
 	smallPage: () => {
    dispatch(smallPage());
  },
	clicFile: (fileName, fileId) => {
    dispatch(clicFile(fileName, fileId));
  }
  
  

});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);