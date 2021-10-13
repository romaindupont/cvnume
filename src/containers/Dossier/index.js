import { connect } from 'react-redux';
// == Import : local
import Dossier from '../../components/Dossier';
import { clicFile } from '../../actions';


const mapStateToProps = (state) => ({
  listDossier: state.Dossier.listDossier,

});

const mapDispatchToProps = (dispatch)=> ({
  clicFile: (fileName, fileId) => {
    dispatch(clicFile(fileName, fileId));
  }
  

});

export default connect(mapStateToProps, mapDispatchToProps)(Dossier);