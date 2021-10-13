import { connect } from 'react-redux';
// == Import : local
import InternetPage from '../../components/InternetPage';


const mapStateToProps = (state) => ({
  listDossier: state.Dossier.listDossier,
	id: state.Dossier.idName

});
const mapDispatchToProps = {};
/* const mapDispatchToProps = (dispatch)=> ({
  changeArticlesField: (newValue, name) => {
    dispatch(changeArticlesField(newValue, name));
  },
  sendArticleToBasket: (article_id, quantity) => {
    dispatch(sendArticleToBasket(article_id, quantity));
  }
  

}); */

export default connect(mapStateToProps, mapDispatchToProps)(InternetPage);