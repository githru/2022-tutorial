import React, { useEffect } from "react";
import * as d3 from "d3";

const D3 = () => {
  useEffect(() => {
    makeGraph();
  }, []);

  const makeGraph = () => {
    const width = 600;
    const height = 600;
    const margin = { top: 60, left: 60, bottom: 60, right: 60 };

    const svg = d3
      .select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // 데이터
    const data = [
      { month: "january", value: 40 },
      { month: "February", value: 10 },
      { month: "march", value: 70 },
      { month: "April", value: 100 },
      { month: "May", value: 30 },
      { month: "June", value: 88 },
    ];

    // x,y,축 배치
    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.month))
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      // @ts-ignore
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()
      .range([height - margin.bottom, margin.top]);
    // @ts-ignore
    const xAxis = (g) => {
      return g
        .attr("transform", `translate(0, ${height})`)
        .attr("transform", `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));
    };
    // @ts-ignore
    const yAxis = (g) =>
      g
        .attr("transform", `translate(${margin.left}, 0)`)
        .call(
          d3.axisLeft(y).tickValues([0, 20, 40, 60, 80, 100]).tickSize(-width)
        )
        // @ts-ignore
        .call((g) => g.select(".domain").remove())
        .attr("class", "grid");

    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);

    //라인차트
    const line = d3
      .line()
      // @ts-ignore
      .x((d) => x(d.month) + x.bandwidth() / 2)
      // @ts-ignore
      .y((d) => y(d.value));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "orange")
      .attr("stroke-width", 1)
      // @ts-ignore
      .attr("d", line);

    svg
      .append("g")
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d.value)
      // @ts-ignore
      .attr("x", (data) => x(data.month) + x.bandwidth() / 2)
      .attr("y", (data) => y(data.value) - 5)
      .attr("fill", "black")
      .attr("font-size", "10px")
      .attr("text-anchor", "middle");
  };

  return <></>;
};
export default D3;
