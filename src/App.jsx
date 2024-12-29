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

    
    <div className="flex p-5 flex-col items-center h-[100vh]">

      <div className=' pb-7 pt-5 rounded-md shadow-2xl  min-w-[50%] max-w-3xl'>

      <form onSubmit={submitHandler} className='pl-8 flex flex-col'>
        <fieldset>
        <legend className='text-2xl font-semibold text-center text-orange-400 pr-8'>Personal Data</legend>
        
        
       <div>
       <p className='text-black font-medium'>First Name</p>
       <input className='h-11 rounded-md border-solid w-[95%] border-[1px] p-2 border-blue-400' type="text" name='firstname'  onChange={changeHandler} placeholder='Harshal' />
       </div>
        
       <div>
       <p className='text-black font-medium '>LastName name</p>
       <input className='h-11 rounded-md border-solid w-[95%] border-[1px] p-2 border-blue-400' type="text" name='lastname' onChange={changeHandler}  placeholder='kotkar' />
       </div>
        
        <div>
        <p className='text-black font-medium'>Email address</p>
        <input className='h-11 rounded-md border-solid w-[95%] border-[1px] p-2 border-blue-400' type='email' onChange={changeHandler} name='email' placeholder='harshalkotkar@gmail.com' />
        </div>
        
        <div>
        <p className='text-black font-medium '>Country</p>
      
      <select className='h-11 rounded-md border-solid w-[95%] border-[1px] p-2 border-blue-400' name="country" id="country" onChange={changeHandler} value={data.country} >
      
      <option value="India">India</option>
      <option value="South-Africa">South-Africa</option>
      <option value="Sri-Lanka">Sri-Lanka</option>
      <option value="Austrilia">Austrilia</option>
      <option value="England">England</option>

      </select>
        </div>

        <div>
        <p className='text-black font-medium mb-2'>Street Address</p>
        <input className='h-11 rounded-md border-solid w-[95%] border-[1px] p-2 border-blue-400' type="text" name='address' onChange={changeHandler} placeholder='123/St-read/....' />
        </div>

      <div>
      <p className='text-black font-medium mb-2'>City</p>
      <input className='h-11 rounded-md border-solid w-[95%] border-[1px] p-2 border-blue-400' type="text" name='city' onChange={changeHandler} placeholder='Pune' />
      </div>

        <div>
        <p className='text-black font-medium mb-2'>State/Province</p>
        <input className='h-11 rounded-md border-solid w-[95%] border-[1px] p-2 border-blue-400' type="text" name='state' onChange={changeHandler} placeholder='Maharashtra' />
        </div>

        <div>
        <p className='text-black font-medium mb-2'>Zip/Postal code </p>
        <input className='h-11 rounded-md border-solid w-[95%] border-[1px] p-2 border-blue-400' type="text" name='pincode' onChange={changeHandler} placeholder='411005'/>
        </div>

        
        


        <p className='mt-5 mb-3 font-medium'>By Email</p>
{/* //hello */}

 <div>

      <div className='flex mt-2'>

        <div className='flex h-6 items-center'>
        <input className="h-4 w-4 rounded" type="checkbox" checked={data.comments} onChange={changeHandler} id='comments' name='comments' />
        </div>

        <div className='ml-3 text-sm leading-6'>
        <label className='font-medium text-gray-900' htmlFor="comments">Comments</label>
        <p className='text-gray-500'>
        Get notified when someones posts a comment on a posting.
        </p>

        </div>
      </div>







    <div className='flex  mt-2'>

      <div className='flex h-6 items-center'>
      <input className="h-4 w-4 rounded" type="checkbox" id='candidates' checked={data.candidates} onChange={changeHandler} name='candidates' />
      </div>

      <div className='ml-3 text-sm leading-6'>

      <label className='font-medium text-gray-900' htmlFor="candidates">Candidates</label>
      <p className='text-gray-500'>Get notified when a candidate applies for a job</p>

      </div>
    </div>


    <div className='flex  mt-2'>

        <div className='flex h-6 items-center'>
        <input className="h-4 w-4 rounded" type="checkbox" checked={data.offers} onChange={changeHandler} id='offers' name='offers' />
        </div>

        <div className='ml-3 text-sm leading-6'>
        <label className='font-medium text-gray-900' htmlFor="offers">Offers</label>       

        <p className='text-gray-500'>Get notified when a candidate accepts or rejects an offer.</p> 

        </div>
    </div>


  </div>


        
        

        <div className='mt-3'>

        <h2 className='font-medium'>Push Notifications</h2>
        <p className='text-sm text-gray-500'>These are dilivered via SMS to your Mobile phone.</p>

        
        <div className='mt-4 space-y-2'>

        <div className='flex items-center'>
        <input className='h-4 w-4' type="radio" id='everything'name='smsMode' value="Everything" 
        checked={data.smsMode ==="Everything"} onChange={changeHandler} />
        <label className= 'ml-3 text-sm font-medium leading-6 text-gray-900' htmlFor="everything">Everything</label>
        </div>

       <div className='flex items-center'>
       <input  className='h-4 w-4' type="radio" id='small' name='smsMode' value="Small as Small" checked={data.smsMode ==="Small as Small"}   onChange={changeHandler}/>
       <label className= 'ml-3 text-sm font-medium leading-6 text-gray-900' htmlFor="small">Small as Small</label>
       </div>

       <div className='flex items-center'>
       <input  className='h-4 w-4' type="radio" id='nopush'name='smsMode' value="No Push Notification" checked={data.smsMode ==="No Push Notification"}  onChange={changeHandler}/>
       <label className= 'ml-3 text-sm font-medium leading-6 text-gray-900' htmlFor="nopush">No push potifications</label>
       </div>

        </div>




        </div>

        

        <div className='mt-5'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Save</button>
        </div>
      </fieldset>


      </form>

      </div>

    </div>
  );
}

export default App;
