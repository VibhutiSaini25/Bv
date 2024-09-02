import React,{useState} from "react";

function BondValuation() {
  const[a,setA]=useState('');
  const[b,setB]=useState('');
  const[c,setC]=useState('');
  const[d,setD]=useState(0);
  const[res,setRes]=useState([]);
  const[total,setTotal]=useState(0);
  const handleInputChange1=(event)=>{
    setA(parseInt(event.target.value));
  };
  const handleInputChange2=(event)=>{
    setB(parseInt(event.target.value));
  };
  const handleInputChange3=(event)=>{
    setC(parseInt(event.target.value));
  };
  const handleInputChange4=(event)=>{
    setD(parseInt(event.target.value));
  };

  const calculateValue=()=>
  {
    const ir=parseInt(a);
    const f=parseInt(b);
    const ytm=parseInt(c);
    const y=parseInt(d);
    const res1=[];
    const cf=(ir*f)/100;
    const n=f+cf
    let total=0
    for (let i = 1; i <=y ; i++)
    {
      let pvAty=1/Math.pow((1+(ytm/100)),i)
      if(i<y)
      {
      let pv=cf*pvAty
      
      res1.push(pv.toFixed(2))
      total+=pv
      }
      if(i===y)
      {
        const pvf=n*pvAty
        res1.push(pvf.toFixed(2))
        total+=pvf
      }
      
    }

    setRes(res1)
    
    setTotal(total.toFixed(2))

  }
   
  
  

  return (
    <div className="main">
      <h2 >Calculate Bond Value after given number of years</h2>
      <form className="f">
      <label>
        Enter Interest rate (a):
        <input type="number" value={a}  onChange={handleInputChange1} />
      </label><br></br>
      <label>
        Enter Face Value (b): 
        <input type="number" value={b} onChange={handleInputChange2} />
      </label><br></br>
      <label>
        Enter Yeild To maturity(c):
        <input type="number" value={c} onChange={handleInputChange3} />
      </label><br></br>
      <label>
        Enter Number of years (d):
        <input type="number" value={d} onChange={handleInputChange4} />
      </label>
        
      </form>
      
      
      
      
      <button className="b" onClick={calculateValue}>Calculate</button>
      <div>
        <h3>Bond Values for each year:</h3>
        <ul>
          {res.map((res1,index) => (
            <li key={index}>{res1}</li>
          ))}
        </ul>
      </div>
      <div className="f">
        <h3>Bond Value after {d} years:</h3>
        <div>
          <p>{total}</p>
        </div>
      </div>

    </div>
    
  );
}

export default BondValuation;
