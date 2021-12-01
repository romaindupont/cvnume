export const LARGE_MAIL_PAGE = 'LARGE_MAIL_PAGE';
export const largeMailPage = () => ({
  type: LARGE_MAIL_PAGE
});

export const SMALL_MAIL_PAGE = 'SMALL_MAIL_PAGE';
export const smallMailPage = () => ({
  type: SMALL_MAIL_PAGE
});

export const CLOSE_MAIL_PAGE = 'CLOSE_MAIL_PAGE';
export const closeMailPage = () => ({
  type: CLOSE_MAIL_PAGE
});

export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export const changeCategory = (category) => ({
  type: CHANGE_CATEGORY,
	category
});

export const CHOOSE_MESSAGE = 'CHOOSE_MESSAGE';
export const chooseMessage = (id) => ({
  type: CHOOSE_MESSAGE,
	id
});

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMessage = (id, prenom, nom, category, title, date, text, mail) => ({
  type: SEND_MESSAGE,
	id,
	prenom,
	nom,
	category,
	title,
	date,
	text,
	mail
});