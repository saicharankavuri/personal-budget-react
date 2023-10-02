import axios from 'axios';
import Chart from 'chart.js/auto';
import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';
import '../App.scss';

function HomePage() {
  const chartRef = useRef(null);
  let data_p= {
    data: [],
    backgroundColor: [
        '#ffcd56',
        '#ff6384',
        '#36a2eb',
        '#fd6b19',
        "#000080", 
        "#800080", 
        "#808080", 
        "#a52a2a"
    ],
    labels: []
  };

  useEffect(() =>{
    function Chart_create (data){
            

      if(chartRef.current) {
        d3.select(chartRef.current).select('svg').remove();
      }
      console.log(data);
      // Set up the dimensions and radius for the pie chart
      var width = 400;
      var height = 400;
      var radius = Math.min(width, height) / 2;

      // Create an SVG element
      var svg = d3.select("#chart")
          .append("svg")
          .attr("width", width)
          .attr("height", height)
          .append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      // Define a color scale
      var color = d3.scaleOrdinal()
          .range(["#ffcd56", "#ff6384", "#36a2eb", "#fd6b19", "#000080", "#800080", "#808080", "#a52a2a", "#5f9ea0"]);

      // Define the pie layout
      var pie = d3.pie()
          .value(function(d) { return d.budget; });

      // Create an arc generator
      var arc = d3.arc()
          .innerRadius(0)
          .outerRadius(radius);

      // Bind the data to the SVG elements
      var arcs = svg.selectAll("arc")
          .data(pie(data))
          .enter()
          .append("g");

      // Append the arcs to the SVG and add colors
      arcs.append("path")
          .attr("d", arc)
          .attr("fill", function(d) { return color(d.data.title); });

      // Add labels to the arcs
      arcs.append("text")
          .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
          .attr("text-anchor", "middle")
          .text(function(d) { return d.data.title; });
  }

    function createChart() {

      const ctx = document.getElementById("myChart");

      const existingChart = Chart.getChart(ctx);
      // console.log(existingChart);
      if (existingChart) {
        existingChart.destroy();
      }
        //console.log(ctx);
        new Chart(ctx, {
            type: "doughnut",
            data: {
            labels: data_p.labels,
            datasets: [
            {
                label: "Language Popularity",
                data: data_p.data,
            },
            ],
            }
        })  
    }
    //createChart();
    function getBudget() {
      axios.get('http://localhost:4000/budget')
      .then((res) => {
          console.log(res.data.myBudget.length);
          data_p.data = [];
          data_p.labels = [];
          for(var i = 0; i < res.data.myBudget.length; i++ ){
              data_p.data.push(res.data.myBudget[i].budget);
              data_p.labels.push(res.data.myBudget[i].title);
          }
          //console.log(data);
          console.log(res.data.myBudget[0].budget);
          createChart();
          Chart_create(res.data.myBudget);
      })
  };
  getBudget();

  }, []);
    



  return (
    <div className="container center"> 
    
        <div className="page-area">
    
            <div className="text-box">
                <h1 id="stay-on-track-heading">Stay on track</h1>
                    <p aria-labelledby="stay-on-track-heading">
                        Do you know where you are spending your money? If you really stop to track it down,
                        you would get surprised! Proper budget management depends on real data... and this
                        app will help you with that!
                    </p>
            </div>
    
            <div className="text-box">
                <h1 id="alerts-heading">Alerts</h1>
                <p aria-labelledby="alerts-heading">
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </div>
    
            
    
            <div className="text-box">
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </div>
    
            <div className="text-box">
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </div>
    
            

            <div className="graphs_container">
                <h2> Chart generated through Chart.js </h2>
                <div id="test">
                <canvas id="myChart" width="400" height="400"></canvas>
                 </div>
                
                
            </div>
            <h2> Chart generated through D3JS </h2>
            <div id="chart" ref={chartRef}></div>
        
        </div>
    
    </div>
  );
}

export default HomePage;
