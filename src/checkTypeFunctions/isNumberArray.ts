export function isNumberArray(value: any): value is number[] {
	if (Array.isArray(value)) {
		return value.every(item => typeof item === 'number');
	}
}