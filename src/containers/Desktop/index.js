import { connect } from 'react-redux';
// == Import : local
import Desktop from '../../components/Desktop';


const mapStateToProps = (state) => ({
	theme: state.Dossier.theme

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

export default connect(mapStateToProps, mapDispatchToProps)(Desktop);