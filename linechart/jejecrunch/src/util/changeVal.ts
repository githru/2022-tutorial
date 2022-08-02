import { InputData, Category } from '../types/interface';

const init: [number, number][] = [];

export default function changeVal(d: InputData[], { type }: Category) {
	const result = d.reduce((prev, cur: InputData) => {
		if (type === 'ts_file') {
			prev.push([Number(cur.date), Number(cur.value)]);
		} else if (type === 'csv_url') {
			let chd = 0;
			if (cur.date) {
				if (typeof cur.date !== 'string') chd = cur.date.getTime();
				else chd = Number(cur.date);
			}
			prev.push([chd, Number(cur.value)]);
		}
		return prev;
	}, init);

	return result.slice(0, d.length - 1);
}
