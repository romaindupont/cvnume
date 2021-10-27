import { connect } from 'react-redux';
// == Import : local
import Diplomes from '../../components/Diplomes';

const mapStateToProps = (state) => ({
  listDiplomes: state.Diplomes.Listdiplomes,

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

export default connect(mapStateToProps, mapDispatchToProps)(Diplomes);