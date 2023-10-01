import '../App.css';

function HomePage() {
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
            <div id="chart"></div>
        
        </div>
    
    </div>
  );
}

export default HomePage;
