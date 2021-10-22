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