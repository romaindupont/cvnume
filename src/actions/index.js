export const CLIC_FILE = 'CLIC_FILE';
export const clicFile = (fileName, fileId) => ({
  type: CLIC_FILE,
  fileName,
	fileId,
});

export const CHANGE_VALUE = 'CHANGE_VALUE';
export const changeValue = (newValue, key) => ({
  type: CHANGE_VALUE,
  newValue,
  key
});

export const CHANGE_THEME = 'CHANGE_THEME';
export const changeTheme = (theme) => ({
  type: CHANGE_THEME,
  theme
});