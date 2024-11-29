import { useState } from 'react';
import Employee from './Employee';
const Employees = () => {
    const [employees] = useState([
        { empId: 1234, name: 'John', designation: 'SE' },
        { empId: 4567, name: 'Tom', designation: 'SSE' },
        { empId: 8910, name: 'Kevin', designation: 'TA' }])
    return (
        <Employee employees={employees} />
    )
}
export default Employees;
