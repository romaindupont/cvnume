import React, {useState, useEffect} from 'react';
import './style.scss';
import Search from '../../../assets/img/search-solid.svg';
import SmallMessage from './smallMessage';

const ViewSmallMessage = ({mail,category,chooseMessage, setOpenMessage, setNewMessage}) => {
	const [ searchTerm, setSearchTerm ] = useState('');
	const [ searchResults, setSearchResults ] = useState([]);
	const inputWord = (e) => {
    setSearchTerm(e.target.value);
  }
  useEffect(() => {
		if (searchTerm !=='') {
			const results = mail.filter(mailing =>
      mailing.title.toLowerCase().includes(searchTerm)
			
    );
    setSearchResults(results);
	}
	else {
		const results = mail.filter((mailing) => mailing.category === category);
		setSearchResults(results);
	}

  }, [searchTerm,category,mail])
  return (
		<div className="mailBox-viewSmallMessage">
			<div className="viewSmallMessage-searchBar">
				<img src={Search} alt="search" />
				<input type="search" name="search" placeholder="Zone de recherche" onChange={inputWord} value={searchTerm}/>
			</div>
			<div className="smallMessage-group" id="srollbar">
				{searchResults.map((mailing, i)=> (
					<SmallMessage key={i} {...mailing} chooseMessage={chooseMessage} setOpenMessage={setOpenMessage} setNewMessage={setNewMessage} />
				))}

			</div>

		</div>
  );
}

export default ViewSmallMessage;