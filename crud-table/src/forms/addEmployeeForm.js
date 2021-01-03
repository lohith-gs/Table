import React,{useState} from 'react';

const AddEmployeeForm=(props)=>{


    const initEmp= {id: null, name: '', department: '',location:'',email:''};

    const [emp,setEmp] = useState(initEmp);

    const handleChange = e => {
        const {name, value} = e.target;
        setEmp({...emp, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (emp.name && emp.id) {
            handleChange(e,props.addEmployee(emp));
        }
    }


    return (
        <div className="card card-body " style={{width:"100%",display:"flex",alignItems:"center"}}>
        <form>
            <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">Id</span>
            </div>
            <input type="text" class="form-control" name="id" value={emp.id} onChange={handleChange}/>
            </div>
            
            <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
            </div>
            <input type="text" class="form-control" name="name" value={emp.name} onChange={handleChange}/>
            </div>
            
            <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">Department</span>
            </div>
            <input type="text" class="form-control" name="dept" value={emp.dept} onChange={handleChange}/>
            </div>
            
            <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">Location</span>
            </div>
            <input type="text" class="form-control" name="location" value={emp.location} onChange={handleChange}/>
            </div>

            <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">Email</span>
            </div>
            <input type="text" class="form-control" name="email" value={emp.email} onChange={handleChange}/>
            </div>

            <button type="submit" class="btn btn-dark" onClick={handleSubmit}>Add user</button>
        </form>
        </div>
    )
}

export default AddEmployeeForm;