import React, {useState} from 'react';
import './style.scss';
import Search from '../../../assets/img/search-solid.svg';
import SmallMessage from './smallMessage';

const ViewSmallMessage = ({mail,category}) => {
	const [ searchTerm, setSearchTerm ] = useState('');
	/* const [ wait, setWait ] = useState(false); */
	let newList = mail.filter((mailing) => mailing.category === category);
	const inputWord = (e) => {
    setSearchTerm(e.target.value);
		
		if (e.target.value !=='') {
			newList = mail.filter((mailing) => mailing.title.includes(searchTerm) /* || mailing.text.includes(searchTerm) */ );
			/* setWait(true) */
		}
		else {
			newList = mail.filter((mailing) => mailing.category === category);
		}
  }
/* 	const triMail = mail.filter((mailing)=> mailing.category === category) */
  return (
		<div className="mailBox-viewSmallMessage">
			<div className="viewSmallMessage-searchBar">
				<img src={Search} alt="search" />
				<input type="search" name="search" placeholder="Zone de recherche" onChange={inputWord}/>
			</div>
			<div className="smallMessage-group" id="srollbar">
				{newList.map((mailing, i)=> (
					<SmallMessage key={i} {...mailing}/>
				))}

			</div>

		</div>
  );
}

export default ViewSmallMessage;