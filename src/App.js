import React, {useState} from 'react';

function App() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [name, setName] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    setName(`${firstname} ${lastname}`)
    setFirstname('')
    setLastname('')
  }

  return (
    <>
    <div className="p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Learn React Js</div>
              <div className="card-body">

                <form onSubmit={submitHandler}>
                <div className="mb-4">
                  <label htmlFor="firstname" className="form-label">Firstname</label>
                  <input type="text" className='form-control' id='firstname' name='firstname' value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                </div>
                <div className="mb-4">
                  <label htmlFor="lastname" className="form-label">Lastname</label>
                  <input type="text" className='form-control' id='lastname' name='lastname' value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary btn-blcok">Show</button>
                </form>

              </div>
              <div className="card-footer">My Name is {name ? name : '. . . '}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;