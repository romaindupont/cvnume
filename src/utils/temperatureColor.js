export const getHueFromTemperature = (temperature) => {
	let limitedTemperature = temperature;

	const min = 0;
	const max = 40;
	limitedTemperature = Math.max(min, limitedTemperature);
	limitedTemperature = Math.min(max, limitedTemperature);

	limitedTemperature = limitedTemperature - min;
	const percent = limitedTemperature * 100 / (max - min);
	
	const hueMax = 0;
	const hueMin = 230;

	const hue = hueMin - (percent * (hueMin - hueMax) / 100);

return hue;
}