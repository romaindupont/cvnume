import { connect } from 'react-redux';
// == Import : local
import MenuAccesRapide from '../../../components/DossierOuvert/MenuAccesRapide';
import { clicFile } from '../../../actions';


const mapStateToProps = null;

const mapDispatchToProps = (dispatch)=> ({
  clicFile: (fileName, fileId) => {
    dispatch(clicFile(fileName, fileId));
  }
  

});

export default connect(mapStateToProps, mapDispatchToProps)(MenuAccesRapide);