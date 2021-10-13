export const CLIC_FILE = 'CLIC_FILE';
export const clicFile = (fileName, fileId) => ({
  type: CLIC_FILE,
  fileName,
	fileId,
});