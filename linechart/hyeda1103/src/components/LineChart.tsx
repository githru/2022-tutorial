import { useEffect, useRef } from 'react'
import {
  select,
  extent,
  scaleLinear,
  axisBottom,
  axisLeft,
  line,
  max,
  Selection,
  timeFormat,
  scaleTime,
  curveMonotoneX,
  min,
} from 'd3';
import styled from 'styled-components';
import * as T from '@/types'

const GraphWrapper = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
`

interface Props {
  data: T.BasicLineData[]
}

function LineChart({ data }: Props) {
  const graphRef = useRef<HTMLDivElement | null>(null)
  const width = 1200;
  const height = 600;
  const margin = { top: 120, right: 0, bottom: 40, left: 80 };
  
  useEffect(() => {
    // parse data to prevent type error
    const parsed = data.map((d) => ([
      d.x, d.y
    ])) as [number, number][]
        
    // select HTML div element to draw line graph(svg) as child element
    const svg = select(graphRef.current)
      .call(g => g.select('svg').remove()) // remove any svg element before rendering new one
      .append('svg')
      .attr('viewBox', `0, 0, ${width + margin.left + margin.right}, ${height + margin.top + margin.bottom}`);
    
    // generate x-axis
    const xScale = scaleTime()
      .domain(extent(parsed, d => d[0]) as [number, number])
      .range([margin.left, width - margin.right])
    
    const formatDate = timeFormat(`%m월 %d일`)
    
    const xAxis = (g: Selection<SVGGElement, unknown, null, undefined>) => g
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(axisBottom(xScale)
        .tickFormat((d, i) => {
          return i === parsed.length - 1 ? `${formatDate(d as Date)} (조회 기준일)` : formatDate(d as Date)
        })
        .tickValues(parsed.map(d => d[0]))
        .tickPadding(12)
      ).selectAll('text')
        .style('text-anchor', 'end')
        .style('font-size', '11px')
        .attr('dx', '-7px')
        .attr('dy', '0')
        .attr('transform', function (d) {
          return 'rotate(-30)';
      });
    
    // add x-axis
    svg
      .append('g')
      .call(xAxis);

    // generate y-axis
    const yMin = min(parsed, d => d[1]) as number;
    const yMax = max(parsed, d => d[1]) as number;
    
    const yScale = scaleLinear()
      .domain([yMin - 5000, yMax + 5000])
      .range([height - margin.bottom, margin.top])
    
    const yAxis = (g: Selection<SVGGElement, unknown, null, undefined>) => g
      .attr('transform', `translate(${margin.left}, 0)`)
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(axisLeft(yScale)
        .tickFormat((d) => `${d.toLocaleString()}`)
        .tickValues(parsed.map(d => d[1]))
        .tickPadding(8)
      )
      .selectAll('text')
      .style('text-anchor', 'end')
      .style('font-size', '11px')

    // add y-axis
    svg
      .append('g')
      .call(yAxis)

    // add dashed lines parallel to x-axis
    svg
      .append('g')
      .attr('class', 'grid')
      .attr('transform', `translate(${margin.left}, 0)`)
      .style('stroke-dasharray', ('3, 5'))
      .style('stroke-width', 0.5)
  		.call(axisLeft(yScale)
        .tickFormat((d) => `${d.toLocaleString()}`)
        .tickValues(parsed.map(d => d[1]))
        .tickPadding(8)
        .tickSize(-width + margin.left + margin.right)
      )
      .selectAll('text')
      .style('display', 'none');
    
    // add dashed lines parallel to y-axis
    svg
      .append('g')
      .attr('class', 'grid')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
  		.style('stroke-dasharray', ('3, 5'))
      .style('stroke-width', 0.5)
  		.call(axisBottom(xScale)
        .tickSize(-height + margin.top + margin.bottom)
        .tickValues(parsed.map(d => d[0]))
      )
      .selectAll('text')
      .style('display', 'none');
    
    // generate line
    const lineGenerator = line()
      .x((d) => xScale(d[0]))
      .y((d) => yScale(d[1]))
      .curve(curveMonotoneX)
    
    // add line
    svg
      .append('path')
      .data([parsed])
      .attr('stroke', '#333')
      .attr('stroke-width', 1.2)
      .attr('fill', 'none')
      .attr('d', parsed => lineGenerator(parsed))
    
    // add dots
    svg
      .selectAll('.dot')
      .data(parsed)
      .join('circle')
      .attr('class', 'dot')
      .attr('r', 3)
      .attr('stroke', '#333')
      .attr('stroke-width', 1.2)
      .attr('fill', '#DB4455')
      .attr('cx', parsed => xScale(parsed[0]))
      .attr('cy', parsed => yScale(parsed[1]));
    
    // add title of graph
    svg
      .append('text')             
      .attr('transform',
          `translate(${(width + margin.left + margin.right) / 2}, ${margin.top / 2})`)
      .attr('text-anchor', 'middle')  
      .style('font-size', '24px') 
      .text('코로나 국내발생현황(확진)');
    
    // add x-axis label
    svg
      .append('text')             
      .attr('transform',
          `translate(${(width + margin.left + margin.right) / 2}, ${height + margin.bottom})`)
      .style('text-anchor', 'middle')
      .style('font-size', '14px')
      .text('날짜');

    // add y-axis label
    svg
      .append('text')             
      .attr('transform',
        `translate(${margin.left - 8}, ${margin.top})`)
      .style('text-anchor', 'end')
      .style('font-size', '14px')
      .text('확진자 수');
  }, [data, width, height, margin])
  return (
    <GraphWrapper ref={graphRef} />
  )
}

export default LineChart
