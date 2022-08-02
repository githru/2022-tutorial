import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../components/Linechart';
import { readCSVurlData, readTSFileData } from '../../data/readData';
import { Id, InputData, DataType } from '../../types/interface';

function OneLineChart({ number }: Id) {
	const [data, setData] = useState<InputData[]>([]);
	const CSV_URL =
		'https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv';
	const [url] = useState<string>(CSV_URL);
	const [type, setType] = useState<DataType>('ts_file');
	const [color, setColor] = useState<string>('#ffffff');

	// read and set data
	const read = useCallback(() => {
		if (number === 1) {
			setData(readTSFileData());
			setType('ts_file');
			setColor('#a76511');
		} else if (number === 2) {
			readCSVurlData({ url }).then((v) => setData(v));
			setType('csv_url');
			setColor('#029711');
		}
	}, [number, url]);

	useEffect(() => read(), [read]);

	return (
		<>
			<h3>#{number}</h3>
			<LineChart _height={400} type={type} data={data} color={color} />
			<Link to="/" style={{ textDecoration: 'none' }}>
				<span style={{ fontSize: '0.5em', color: 'white' }}>메인으로</span>
			</Link>
		</>
	);
}

export default OneLineChart;
