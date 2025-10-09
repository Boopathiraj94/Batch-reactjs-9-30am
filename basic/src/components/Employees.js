import React, { useState } from 'react'

const Employees = () => {

    const [empdetails, setEmpdetails] = useState({
        name: "",
        age: 0,
        designation: "",
        address: "",
        gender: "",
        salary: 0.00,
    })

    const [emplists, setEmplists] = useState([])

    // console.log(empdetails)

    let handleSave = (e) => {
        e.preventDefault()
        // empdetails.name === ""
        // {
        //     setErros((prev)=> {... errors , name: "name cann't be empty"})
        // }

        setEmplists((prev) => [...prev, empdetails])

        console.log("Employee List => ", emplists)

        // localStorage.setItem("EmpList", JSON.stringify(emplists))
    }

    let list;
    if (emplists && emplists.length > 1) {

        list = emplists.map((ele, i) => {
            if (ele.gender === "Male") {
                return <tr key={i} style={{ backgroundColor: "blue" }}>
                    <td>{i + 1}</td>
                    <td>{ele.name}</td>
                    <td>{ele.age}</td>
                    <td>{ele.designation}</td>
                    <td>{ele.address}</td>
                    <td>{ele.salary}</td>
                </tr>
            } else {
                return <tr key={i} style={{ backgroundColor: "red" }}>
                    <td>{i + 1}</td>
                    <td>{ele.name}</td>
                    <td>{ele.age}</td>
                    <td>{ele.designation}</td>
                    <td>{ele.address}</td>
                    <td>{ele.salary}</td>
                </tr>
            }

        })

    }


    return (
        <div>
            <h1>Employees</h1>

            <form onSubmit={(e) => handleSave(e)}>
                <input
                    type='text'
                    placeholder='Employee Name'
                    onChange={(e) => setEmpdetails({ ...empdetails, name: e.target.value })}
                />
                {/* <span>{eo.name}</span> */}
                <br />
                <input
                    type='radio'
                    placeholder='Employee Name'
                    value="Male"
                    onClick={(e) => setEmpdetails({ ...empdetails, gender: e.target.value })}
                />Male
                <br />
                <input
                    type='radio'
                    placeholder='Employee Name'
                    value="Female"
                    onChange={(e) => setEmpdetails({ ...empdetails, gender: e.target.value })}
                />Female
                <br />
                <input
                    type='number'
                    placeholder='Employee Age'
                    onChange={(e) => setEmpdetails({ ...empdetails, age: parseInt(e.target.value) })}
                />
                <br />
                <input
                    type='text'
                    placeholder='Designation'
                    onChange={(e) => setEmpdetails({ ...empdetails, designation: e.target.value })}
                />
                <br />
                <input
                    type='text'
                    placeholder='Address'
                    onChange={(e) => setEmpdetails({ ...empdetails, address: e.target.value })}
                />
                <br />
                <input
                    type='number'
                    placeholder='Salary'
                    onChange={(e) => setEmpdetails({ ...empdetails, salary: parseFloat(e.target.value) })}
                />
                <br />
                <button type='submit'>Submit</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Designation</th>
                        <th>Address</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>

        </div>
    )
}

export default Employees