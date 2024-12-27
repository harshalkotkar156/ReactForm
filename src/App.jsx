import { useState } from 'react';
import './App.css';

function App() {

  const[data,setData]= useState({firstname :"",lastname :"",email:"",country:"",comments:false,candidates:false,offers:false,address:"",city:"",pincode:"" ,state:"" ,smsMode:"",});
  // console.log(data);
  function changeHandler(event)
  { 
    const{name,type,checked,value} = event.target;
    
    setData(prevData => {
      return { 
        ...prevData,
        [name] : type==='checkbox' ? checked:value,
        
      }
    }
    )
  } 

  function submitHandler(event)
  {
    event.preventDefault();
    console.log("This is final data .");
    console.log(data);


  }

  return (

    
    <div className="App">

      <form onSubmit={submitHandler}>
        <fieldset>
        <legend>Personal Data</legend>
        <p>FirstName</p>
        <input type="text" name='firstname'  onChange={changeHandler} placeholder='Harshal' />
        <p>LastName name</p>
        <input type="text" name='lastname' onChange={changeHandler}  placeholder='kotkar' />
        <p>Email address</p>
        <input type='email' onChange={changeHandler} name='email' placeholder='harshalkotkar@gmail.com' />
        <p>Country</p>
        <label htmlFor="country" > Select Country</label>
        <select name="country" id="country" onChange={changeHandler} value={data.country} >
        
        <option value="India">India</option>
        <option value="South-Africa">South-Africa</option>
        <option value="Sri-Lanka">Sri-Lanka</option>
        <option value="Austrilia">Austrilia</option>
        <option value="England">England</option>

        </select>

        <p>Street Address</p>
        <input type="text" name='address' onChange={changeHandler} placeholder='123/St-read/....' />

        <p>City</p>
        <input type="text" name='city' onChange={changeHandler} placeholder='Pune' />

        <p>State/Province</p>
        <input type="text" name='state' onChange={changeHandler} placeholder='Maharashtra' />

        <p>Zip/Postal code </p>
        <input type="text" name='pincode' onChange={changeHandler} placeholder='411005'/>

        <p>By Email</p>
        
        <input type="checkbox" checked={data.comments} onChange={changeHandler} id='comments' name='comments' />
        <label htmlFor="comments">Comments</label>
        <p>Get notified when someones posts a comment on a posting.</p>
        <br />
        <input type="checkbox" id='candidates' checked={data.candidates} onChange={changeHandler} name='candidates' />
        <label htmlFor="candidates">Candidates</label>
        <p>Get notified when a candidate applies for a job</p>
        <br />
        <input type="checkbox" checked={data.offers} onChange={changeHandler} id='offers' name='offers' />
        <label htmlFor="offers">Offers</label>       
        <p>Get notified when a candidate accepts or rejects an offer.</p> 

        <h2>Push Notifications</h2>
        <p>These are dilivered via SMS to your Mobile phone.</p>

        
        <input type="radio" id='everything'name='smsMode' value="Everything" 
        checked={data.smsMode ==="Everything"} onChange={changeHandler} />
        <label htmlFor="everything">Everything</label>

        <input type="radio" id='small' name='smsMode' value="Small as Small" checked={data.smsMode ==="Small as Small"}   onChange={changeHandler}/>
        <label htmlFor="small">Small as Small</label>

        <input type="radio" id='nopush'name='smsMode' value="No Push Notification" checked={data.smsMode ==="No Push Notification"}  onChange={changeHandler}/>
        <label htmlFor="nopush">No push potifications</label>

        <br />

        <button>Submit</button>
      </fieldset>


      </form>

    </div>
  );
}

export default App;
