export const LARGE_PAGE = 'LARGE_PAGE';
export const largePage = () => ({
  type: LARGE_PAGE
});

export const SMALL_PAGE = 'SMALL_PAGE';
export const smallPage = () => ({
  type: SMALL_PAGE
});

export const CLOSE_PAGE = 'CLOSE_PAGE';
export const closePage = () => ({
  type: CLOSE_PAGE
});


export const OPEN_WEBSITE_PAGE = 'OPEN_WEBSITE_PAGE';
export const openWebsitePage = (url) => ({
  type: OPEN_WEBSITE_PAGE,
	url
});