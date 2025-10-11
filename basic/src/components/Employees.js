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
    const [editIndex,setEditIndex] = useState(null)

    const [errors,setErrors]= useState({
        nameError:"",
        AgeError:"",
        DesignationError:"",
        AddressError:"",
        GenderError:"",
    })



    let handleSave = (e) => {
        e.preventDefault()
        
        if(editIndex === null){

            if(empdetails.name === ""){
                setErrors({ ...errors, nameError: "Employee Name cann't be Empty..." })
                return
            }

                setEmplists(prev => [...prev, empdetails])
                setEmpdetails({
                    name: "",
                    age: 0,
                    designation: "",
                    address: "",
                    gender: "",
                    salary: 0.00,
                })
        }else{
            console.log("update")

        const list=  emplists.map((ele,index)=> 
        index === editIndex ? 
        { ...ele , 
            ...empdetails
        }
        : ele
         )

         console.log(list)
   

        setEmpdetails(list)
        }
       
    }

    let handleDelete = (i) => {
       
       const filteredList =   emplists.filter((_, index)=> index !== i )
       setEmplists(filteredList);
    }

    let handleUpdate = (i) => {
         setEmpdetails(emplists[i])
         setEditIndex(i)
    }

    let list;
    if (emplists && emplists.length >= 1) {

        list = emplists.map((ele, i) => {
            if (ele.gender === "Male") {
                return <tr key={i} style={{ color: "blue" }}>
                    <td>{i + 1}</td>
                    <td>{ele.name}</td>
                    <td>{ele.age}</td>
                    <td>{ele.designation}</td>
                    <td>{ele.address}</td>
                    <td>{ele.salary}</td>
                   <td>  <button onClick={() => handleUpdate(i)}>Update</button>
                    <button onClick={() => handleDelete(i)}>Delete</button>
                    </td>
                </tr>
            } else {
                return <tr key={i} style={{ color: "red" }}>
                    <td>{i + 1}</td>
                    <td>{ele.name}</td>
                    <td>{ele.age}</td>
                    <td>{ele.designation}</td>
                    <td>{ele.address}</td>
                    <td>{ele.salary}</td>
                    <td>
                        <button onClick={() => handleUpdate(i)}>Update</button>
                        <button onClick={() => handleDelete(i)}>Delete</button>
                    </td>
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
                    value={empdetails.name}
                    onChange={(e) => setEmpdetails({ ...empdetails, name: e.target.value })}
                />
               <span>{errors.nameError}</span>
                <br />
                <input
                    type='radio'
                    placeholder='Employee Name'
                    value="Male"
                    name='gender'
                    onClick={(e) => setEmpdetails({ ...empdetails, gender: e.target.value })}
                />Male
                <br />
                <input
                    type='radio'
                    placeholder='Employee Name'
                    value="Female"
                     name='gender'
                    onChange={(e) => setEmpdetails({ ...empdetails, gender: e.target.value })}
                />Female
                <br />
                <input
                    type='number'
                    placeholder='Employee Age'
                    value={empdetails.age}
                    onChange={(e) => setEmpdetails({ ...empdetails, age: parseInt(e.target.value) })}
                />
                <br />
                <input
                    type='text'
                    placeholder='Designation'
                    value={empdetails.designation}
                    onChange={(e) => setEmpdetails({ ...empdetails, designation: e.target.value })}
                />
                <br />
                <input
                    type='text'
                    placeholder='Address'
                    value={empdetails.address}
                    onChange={(e) => setEmpdetails({ ...empdetails, address: e.target.value })}
                />
                <br />
                <input
                    type='number'
                    placeholder='Salary'
                    value={empdetails.salary}
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
                        <th>Action</th>
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