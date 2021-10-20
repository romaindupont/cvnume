import { LARGE_MAIL_PAGE, CLOSE_MAIL_PAGE, SMALL_MAIL_PAGE, CHANGE_CATEGORY } from "../actions/mail";

const initialState = {
	openPageMail: 'close',
	mail: [
		{
			id: 1,
			prenom: 'Romain',
			nom: 'Dupont',
			category: 'inbox',
			title: 'Ma lettre de motivation',
			date: '20-10-2021',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus sunt, quas provident dicta nisi vel recusandae animi eveniet? Reiciendis, placeat deserunt fugit natus voluptatibus odio molestiae explicabo animi repellendus culpa, impedit iure itaque labore, maiores delectus recusandae. Nulla nisi voluptate esse magnam expedita soluta dolorem consequatur amet, quasi illo porro tenetur? Dolor odit rerum commodi beatae quod hic eos repudiandae fugiat perspiciatis distinctio harum molestias, at voluptates aliquam molestiae deserunt autem sequi, debitis rem necessitatibus. Excepturi repudiandae nemo, soluta delectus in corrupti deserunt laudantium cupiditate ad. Nostrum sunt qui obcaecati libero dicta mollitia ratione id deleniti odit dolorum fugiat a commodi sint tempore, eveniet rerum ipsam fuga totam veritatis corporis quam iusto officiis! Enim, asperiores! Repellat laborum veritatis nisi assumenda similique natus numquam labore exercitationem. Voluptate error, esse maxime hic nesciunt laboriosam ut odio nam inventore facere quasi eius consequatur quisquam doloremque quidem, molestiae asperiores rem reprehenderit eligendi non dolores aliquam est similique? Quia dicta impedit unde ex quisquam. Reprehenderit distinctio dolores voluptatibus non! Ullam, quos perspiciatis! Facilis totam maxime molestias deserunt! Architecto, dolore enim debitis soluta pariatur neque quo incidunt maxime atque dolor aperiam. Dolores laborum odit repellendus exercitationem ipsam deserunt similique officiis excepturi, hic porro totam facilis? Rerum, quis! Error necessitatibus, aliquid assumenda doloremque, officiis consequuntur corporis perferendis cumque maiores debitis quasi. Numquam magnam reiciendis repellat explicabo voluptatum tempore, laudantium ea, sequi ipsam eum dignissimos! Voluptatem temporibus ab fugiat rem placeat necessitatibus, autem odit nobis labore voluptatum corrupti, praesentium vitae voluptate corporis impedit earum aliquid. Iure ullam vero facilis deserunt totam laborum esse quisquam assumenda, modi non, veniam iusto. Quod deserunt culpa iure id autem dignissimos molestiae, dolorum iste eveniet. Earum deserunt dolore reprehenderit repellendus fugit magnam aut id quod quaerat impedit quo aperiam asperiores in dolorem atque rerum non corporis nihil placeat reiciendis modi, recusandae ipsum. Recusandae fugit dolor blanditiis voluptates illum, odio enim aperiam aspernatur doloremque assumenda sunt soluta numquam est necessitatibus laudantium consectetur consequuntur, earum, ipsa amet! Amet repellat deserunt natus a inventore cumque soluta tempore dicta deleniti. Sapiente tempora soluta, omnis dignissimos facilis perspiciatis quia quasi commodi harum voluptate consequuntur perferendis obcaecati id provident officiis eum. Expedita aperiam nemo fuga possimus debitis ullam, maxime magnam a architecto veritatis libero ea dolores soluta deleniti optio tempore? Sint laborum, veritatis culpa nesciunt dolorem saepe illum natus modi, consequuntur voluptatum ab eius debitis? Autem incidunt vitae corporis culpa, quidem tempore rem accusamus nesciunt laboriosam, ipsum ipsa iusto corrupti. Incidunt consectetur provident alias explicabo? Veniam rerum culpa ea aliquid voluptate, deleniti totam. Consequuntur et labore sequi soluta aliquam ullam iste molestiae eum quaerat dignissimos laboriosam, voluptatem incidunt deleniti adipisci est modi reiciendis quos ab quod debitis? Reprehenderit, placeat libero. Repellendus tenetur illo voluptate impedit laboriosam. Repellat distinctio velit, labore totam obcaecati deleniti fuga a recusandae quod dicta vel natus at ad quas, illo nemo officiis esse quo. Nulla ducimus sit numquam, adipisci at molestiae explicabo, assumenda possimus repudiandae minima laborum. Ratione cum possimus animi, ut repellendus amet ipsum, odio fugit ducimus beatae necessitatibus consectetur! Velit ratione dolore laborum?'
		},
		{
			id: 2,
			prenom: 'Romain',
			nom: 'Dupont',
			category: 'inbox',
			title: 'Mes informations personnelles',
			date: '18-10-2021',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusantium, harum eaque culpa officia sit distinctio, delectus nihil deleniti hic consequuntur itaque eligendi nemo exercitationem sapiente repellendus veritatis aliquid facilis repudiandae id. Quod odit exercitationem illum? Deserunt dignissimos, voluptate quas, qui labore quisquam consequatur ut iusto, alias molestias error deleniti consectetur assumenda cumque delectus incidunt sunt totam. Illum magnam facilis temporibus, impedit aperiam harum dignissimos voluptas tempore voluptates. Culpa, distinctio repellat architecto totam, atque provident voluptate dolorum commodi reprehenderit ipsa corrupti? Voluptatum dolorum ipsum inventore rerum voluptatem et libero asperiores nesciunt nam quisquam quo adipisci, dolorem, quasi iure, sunt animi.'
		},
		{
			id: 3,
			prenom: 'Romain',
			nom: 'Dupont',
			category: 'inbox',
			title: 'Mon adresse',
			date: '18-10-2021',
			text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, sequi?'
		},
		{
			id: 4,
			prenom: 'Romain',
			nom: 'Dupont',
			category: 'inbox',
			title: 'Me contacter',
			date: '18-10-2021',
			text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, sequi?'
		},
		{
			id: 5,
			prenom: 'Romain',
			nom: 'Dupont',
			category: 'send',
			title: 'Message envoyé',
			date: '18-10-2021',
			text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, sequi?'
		},
		{
			id: 6,
			prenom: 'Romain',
			nom: 'Dupont',
			category: 'trash',
			title: 'Message supprimé',
			date: '18-10-2021',
			text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, sequi?'
		}
	],
	category:'',

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
		case CLOSE_MAIL_PAGE:
			return {
				...state,
				openPageMail: 'close'
			}
		case SMALL_MAIL_PAGE:
			return {
				...state,
				openPageMail: 'normal'
			}
		case LARGE_MAIL_PAGE:
			return {
				...state,
				openPageMail: 'big'
			}
		case CHANGE_CATEGORY:
			return {
				...state,
				category: action.category,
			}
    default:
      return state;
  }
};

export default reducer; 