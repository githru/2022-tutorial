import React, { useEffect, useState, useCallback, useMemo } from 'react';
import * as d3 from 'd3';

import { AppleStockDataType, AppleStockColumnType } from './types';

// @ts-ignore
import AppleStockCSV from './assets/data/appleStock.csv';

const positionInfo = {
    marginTop: 20, // top margin, in pixels
    marginRight: 30, // right margin, in pixels
    marginBottom: 30, // bottom margin, in pixels
    marginLeft: 40, // left margin, in pixels
    width: 640, // outer width, in pixels
    height: 400,
};

function App() {
    const [appleStockData, setAppleStockData] = useState<AppleStockDataType>([]);
    const [numOfRows, setNumOfRows] = useState<number[]>([]);
    const [xValues, setXValues] = useState<Date[]>([]);
    const [yValues, setYValues] = useState<number[]>([]);
    const [dataDefined, setDataDefined] = useState<boolean[]>([]);
    const [xDomain, setXDomain] = useState<Date[]>([]);
    const [yDomain, setYDomain] = useState<number[]>([]);
    const [path, setPath] = useState<string>('');

    const fetchAppleStockData = useCallback(async () => {
        try {
            const data: d3.DSVParsedArray<AppleStockColumnType> = await d3.csv(
                AppleStockCSV,
                (row: d3.DSVRowString<keyof AppleStockColumnType>) => ({
                    date: new Date(row.date ? row.date : ''),
                    close: Number(row.close),
                }),
            );
            setAppleStockData(data);
        } catch (error) {
            setAppleStockData([]);
        }
    }, []);

    const getXScale = useMemo(
        () => d3.scaleUtc(xDomain, [positionInfo.marginLeft, positionInfo.width - positionInfo.marginRight]),
        [xDomain],
    );

    const getYScale = useMemo(
        () => d3.scaleLinear(yDomain, [positionInfo.height - positionInfo.marginBottom, positionInfo.marginTop]),
        [yDomain],
    );

    const generateLine = useMemo(
        () =>
            d3
                .line()
                .defined((_, i) => dataDefined[i])
                .curve(d3.curveLinear)
                .x((_, i) => getXScale(xValues[i]))
                .y((_, i) => getYScale(yValues[i])),
        [dataDefined],
    );

    useEffect(() => {
        fetchAppleStockData();
    }, []);

    useEffect(() => {
        if (appleStockData.columns) {
            const [xAxis, yAxis] = appleStockData.columns;

            const curXValues = d3.map(appleStockData, (x) => x[xAxis] as Date);
            const curYValues = d3.map(appleStockData, (y) => y[yAxis] as number);
            const curNumOfRows = d3.range(curXValues.length);
            const curDefined = d3.map(
                appleStockData,
                (_, i) => !Number.isNaN(curXValues[i]) && !Number.isNaN(curYValues[i]),
            );

            setXValues(curXValues);
            setYValues(curYValues);
            setNumOfRows(curNumOfRows);
            setDataDefined(curDefined);
            setXDomain(d3.extent(curXValues) as Date[]);
            setYDomain([0, d3.max(curYValues) as number]);
        }
    }, [appleStockData]);

    useEffect(() => {
        if (xDomain.length && yDomain.length && numOfRows.length) {
            // @ts-ignore
            const curPath = generateLine(numOfRows);

            if (curPath) {
                setPath(curPath);
            }
        }
    }, [xDomain, yDomain]);

    return (
        <div className="App">
            <svg
                width={positionInfo.width}
                height={positionInfo.height}
                viewBox={`0, 0, ${positionInfo.width}, ${positionInfo.height}`}
            >
                <g transform={`translate(0, ${positionInfo.height - positionInfo.marginBottom})`}>
                    {getXScale.ticks().map((tickValues) => (
                        <g
                            key={String(tickValues)}
                            transform={`translate(${getXScale(tickValues)}, 0)`}
                            textAnchor="middle"
                        >
                            <line y2={positionInfo.width / 80} stroke="green" />
                            <text y={positionInfo.width / 80} dominantBaseline="hanging">
                                {tickValues.getFullYear()}
                            </text>
                        </g>
                    ))}
                </g>
                <g />
                <g>
                    {getYScale.ticks().map((tickValues) => (
                        <g
                            key={tickValues}
                            transform={`translate(0,${getYScale(tickValues)})`}
                            textAnchor="middle"
                            dominantBaseline="middle"
                        >
                            <line
                                x1={positionInfo.marginLeft}
                                x2={positionInfo.width - positionInfo.marginRight}
                                stroke="green"
                            />
                            <text dx={positionInfo.marginLeft - 20}>{tickValues}</text>
                        </g>
                    ))}
                </g>
                <path fill="none" stroke="red" d={path} />
            </svg>
        </div>
    );
}

export default App;
