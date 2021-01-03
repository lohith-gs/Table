import './App.css';
import React,{useState} from 'react';
import employeeList from './employee.js';
import EmpTable from './components/table';
import AddEmployeeForm from './forms/addEmployeeForm';
import EditEmployeeForm from './forms/editEmployeeForm';
function App() {
  const [employees,setEmployees]=useState(employeeList);
  
  const addEmployee=(emp) => {
    setEmployees([...employees,emp]);
  };

  const deleteEmp= (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialEmp= { id: null, name: "", dept: "",location:"",email:""};

  const [currentEmp, setCurrentEmp] = useState(initialEmp);

  const editEmp= (id,emp) => {
    setEditing(true);
    setCurrentEmp(emp);
  };

  const updateEmp= (newEmp) => {
    setEmployees(
      employees.map((employee) => (employee.id === currentEmp.id ? newEmp:employee))
    );
    setCurrentEmp(initialEmp);
    setEditing(false);
  };

  return (
    <div className="App">
      <h1>Employee Table </h1>
      {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditEmployeeForm
                currentEmp={currentEmp}
                setEditing={setEditing}
                updateEmp={updateEmp}
              />
            </div>
          ) :(
      <div>
        <h3> Add Employee </h3>
        <AddEmployeeForm addEmployee={addEmployee} currentEmp={currentEmp}/>
      </div>)}
      <div>
        <h3> View Employees </h3>
        <EmpTable employees={employees} deleteEmp={deleteEmp} editEmp={editEmp}/>
      </div>
    </div>
  );
}

export default App;
