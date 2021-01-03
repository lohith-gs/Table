import React from 'react';

const EmpTable=(props)=>{
    return(
    <table className="table">
  <thead className="thead-dark">
    <tr >
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Department</th>
      <th scope="col">Location</th>
      <th scope="col">Email</th>
      <th scope="col">Edit/Delete Employee</th>
    </tr>
  </thead>
  <tbody>
  { props.employees.length > 0 ? (
                    props.employees.map(employee => {
                        const {id,name,dept,location,email} = employee;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{dept}</td>
                                <td>{location}</td>
                                <td>{email}</td>
                                <td>
                                    <button type="button" class="btn btn-light" onClick={()=> props.editEmp(id,employee)}>Edit</button>
                                    <button type="button" class="btn btn-dark" onClick={() => props.deleteEmp(id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>No users found</td>
                    </tr>
                )   
                }
  </tbody>
  </table>
)}

export default EmpTable;