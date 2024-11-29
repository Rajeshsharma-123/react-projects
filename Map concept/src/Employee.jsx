
const Employee = ({ employees }) => {
    return (<>
        <table style={{ width: '60%' }} className='table'>
            <thead className="thead-light">
                <tr>
                    <th>EmpID</th>
                    <th>Name</th>
                    <th>Designation</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => {
                    return (<tr key={employee.empId}>
                        <td>{employee.empId}</td>
                        <td>{employee.name}</td>
                        <td>{employee.designation}</td>
                    </tr>)
                })
                }
            </tbody>
        </table><br /><br />
    </>)
}
export default Employee;
