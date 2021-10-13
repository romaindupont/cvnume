import { connect } from 'react-redux';
// == Import : local
import App from '../../components/App';


const mapStateToProps = (state) => ({
  listDossier: state.Dossier.listDossier,

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

export default connect(mapStateToProps, mapDispatchToProps)(App);