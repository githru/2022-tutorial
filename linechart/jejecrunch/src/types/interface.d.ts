export type DataType = 'ts_file' | 'csv_file' | 'csv_url' | 'json_url' | 'json_file';

export interface Category {
	type: DataType;
}

export interface InputData {
	date: Date | string | '' | null | undefined;
	value: string | number;
}

export interface Data {
	data: InputData[];
}

export interface Props extends Category, Data {
	_height: number;
	color: string;
	number?: number;
}

export interface Id {
	number: number;
}

export interface URLProps {
	url: string;
}

export interface DataProps extends Type {
	url?: string;
	values?: InputData[] | Data[];
}
