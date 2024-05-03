import { useState, useRef  } from 'react';
import './App.css';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('male');
  const [subject, setSubject] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setURL] = useState('');
  const [selectOption, setSelectOption] = useState('');
  const [about, setAbout] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Create a ref for the file input
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email, 
      contact,
      gender,
      selectOption,
      subject,
      resume,
      url,
      about
    );
    setFormSubmitted(true);
  }

  const handleSubjectChange = (sub) => {
    setSubject((prev) => ({
        ...prev,
        [sub]: !prev[sub],
    }));
  };

  const handleRest = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubject({
      english: false,
      maths: false,
      physics: false,
    });
    setResume(""); // Resetting resume to empty string
    // Clear the value of the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }    
    setURL("");
    setSelectOption("");
    setAbout("");
    setFormSubmitted(false);
  }

  return (
    <div className="w-full flex justify-center">
      <div className='max-w-7xl'>
      
      {!formSubmitted && (
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h1 className='text-center text-3xl font-bold mb-8'>Fill out this form</h1>
        <div className='mb-4'>
          <label 
            className='block text-gray-700 text-sm font-bold mb-2' 
            htmlFor='firstName'>
              First Name *
          </label>
          <input 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id="firstName" 
            type='text'
            placeholder='Enter your First Name'
            value={firstName}
            required 
            onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div className='mb-4'>
          <label 
            className='block text-gray-700 text-sm font-bold mb-2' 
            htmlFor='lastName'>
              Last Name *
          </label>
          <input 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id="lastName" 
            type='text'
            placeholder='Enter your Last Name'
            value={lastName}
            required 
            onChange={(e) => setLastName(e.target.value)}/>
        </div>
        <div className='mb-4'>
          <label 
            className='block text-gray-700 text-sm font-bold mb-2' 
            htmlFor='email'>
              Email *
          </label>
          <input 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id="email" 
            type='email'
            placeholder='Enter your Email'
            value={email}
            required 
            onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className='mb-4'>
          <label 
            className='block text-gray-700 text-sm font-bold mb-2' 
            htmlFor='conatct'>
              Conatct *
          </label>
          <input 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id="conatct" 
            type='text'
            placeholder='Enter your Contact'
            value={contact}
            required 
            onChange={(e) => setContact(e.target.value)}/>
        </div>
        <div className='mb-4'>
          <label 
            className='block text-gray-700 text-sm font-bold mb-2' 
            htmlFor='gender'>
              Gender *
          </label>
          <input 
            className=''
            id="maleGender" 
            type='radio'
            name='gender'
            value="male"
            checked={gender === "male"} 
            onChange={(e) => setGender(e.target.value)}/> Male
          <input 
            className=''
            id="femaleGender" 
            type='radio' 
            name='gender'
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}/> Female
          <input 
            className=''
            id="otherGender" 
            type='radio'
            name='gender'
            value="other"
            checked={gender === "other"} 
            onChange={(e) => setGender(e.target.value)}/> Other
        </div>

        <div className='mb-4'>
          <label 
            className='block text-gray-700 text-sm font-bold mb-2' 
            htmlFor='subject'>
              Subject *
          </label>
          <input 
            className=''
            id="englishSubject" 
            type='checkbox'
            checked= {subject.english === true}
            onChange={(e) => handleSubjectChange("english")}/> English
            <input 
            className=''
            id="mathSubject" 
            type='checkbox'
            checked= {subject.maths === true}
            onChange={(e) => handleSubjectChange("maths")}/> Math
            <input 
            className=''
            id="physicsSubject" 
            type='checkbox'
            checked= {subject.physics === true}
            onChange={(e) => handleSubjectChange("physics")}/> Physics
        </div>     
        <div className='mb-4'>
          <label 
            className='block text-gray-700 text-sm font-bold mb-2' 
            htmlFor='resume'>
              Upload Resume *
            </label>
            <input
                type="file"
                name="file"
                id="file"
                onChange={(e) =>setResume(e.target.files[0])}
                placeholder="Enter Upload File"
                required
                ref={fileInputRef}
                accept='.pdf, .docx, .doc'
            />
        </div>
        <div className='mb-4'>
          <label 
            className='block text-gray-700 text-sm font-bold mb-2' 
            htmlFor='url'>
              Enter URL *
            </label>
          <input 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id="url" 
            type='text'
            placeholder='Enter URL'
            value={url}
            required 
            onChange={(e) => setURL(e.target.value)}/> 
        </div>
        <div className='mb-4'>
          <label 
            className='block text-gray-700 text-sm font-bold mb-2' 
            htmlFor='choise'>
              Select your choice
            </label>
            <select 
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              value={selectOption}
              onChange={(e) =>
              setSelectOption(e.target.value)} >

              <option
                  value=""
                  disabled
                  defaultValue={ selectOption === ""}>Select your ans</option>
              <option value="option one">Option 2</option>
              <option value="option two">Option 3</option>
            </select>
        </div>  
        <div className='mb-4'>
          <label 
            className='block text-gray-700 text-sm font-bold mb-2' 
            htmlFor='choise'>
              About
            </label>
          <textarea 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='About your self'
            onChange={(e) =>setAbout(e.target.value)}
            cols="30"
            rows="10"
            value={about}
          >
          </textarea>
        </div>  
        <div className='buttons flex justify-center'>
          <button                 
            className="flex items-center bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600 mr-4"
            onClick={handleRest}
          >
              Reset
          </button>
          <button  
            className="flex items-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-4"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
      )}

        {formSubmitted && (
          <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h1 className='text-center text-3xl font-bold mb-8'>Here are your answers.</h1>
            <p>Full Name: {firstName} {lastName}</p>
            <p>Email: {email}</p>
            <p>Conatct: {contact}</p>
            <p>Gender: {gender}</p>
            <p>Subject: {Object.keys(subject).filter(key => subject[key]).join(', ')}</p>
            <p>Resume: {resume.name}</p>
            <p>URL: <a href={url}>{url}</a> </p>
            <p>Choise: {selectOption}</p>
            <p>About: {about}</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
