import React, { useEffect, useState } from 'react'

import axios from 'axios'

const Employees = () => {

    const [formdata, setFormData] = useState({
        employeeName: "",
        employeeAge: 0,
        employeeAddress: "",
        employeePhone: "",
        _id: ""
    })

    const [employees, setEmployees] = useState([]);

    useEffect(() => {

        // console.log("hi")

        axios.get("http://localhost:5000/v1/products", {})
            .then((res) => {
                let res_data = res.data;
                if (res_data.status) {
                    setEmployees(res_data.response)
                }

            })
            .catch((err) => {
                console.log(err)
            })


    }, [employees])

    // console.log(employees)



    let handleSave = (e) => {
        e.preventDefault();



        if (!formdata._id) {
          const {_id, ...finalFormData} = formdata
             
          setFormData(finalFormData)
 
            axios.post("http://localhost:5000/v1/products", finalFormData)
                .then((res) => {
                    let response = res.data;
                    if (response.status) {
                        alert(response.message)
                    } else {
                        alert(response.message)
                    }

                    setFormData({
                        employeeName: "",
                        employeeAge: 0,
                        employeeAddress: "",
                        employeePhone: "",
                        
                    })

                })
                .catch((err) => {
                    console.log(err)
                })
        } else {

            console.log(formdata)
            axios.put("http://localhost:5000/v1/products",formdata)
             .then((res) => {
                    let response = res.data;
                    if (response.status) {
                        alert(response.message)
                    } else {
                        alert(response.message)
                    }

                    setFormData({
                        employeeName: "",
                        employeeAge: 0,
                        employeeAddress: "",
                        employeePhone: "",
                        _id: ""
                    })

                })
                .catch((err) => {
                    console.log(err)
                })

        }




    }

    let handleDelete = (id) => {

        if (id) {

            axios.delete("http://localhost:5000/v1/products", { data: { id } })
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })

        }

    }



    let handleUpdate = (da) => {
        console.log(da)
        setFormData({
            _id: da._id,
            employeeName: da.employeeName,
            employeeAge: da.employeeAge,
            employeeAddress: da.employeeAddress,
            employeePhone: da.employeePhone,
        })



    }

    let emplist;
    if (employees && employees.length > 1) {

        emplist = employees.map((e, i) => (
            <tr key={i}>
                <td >{i + 1}</td>
                <td>{e.employeeName}</td>
                <td>{e.employeeAge}</td>
                <td>{e.employeeAddress}</td>
                <td>{e.employeePhone}</td>
                <td>
                    <button type='button' onClick={() => handleUpdate(e)} >Update</button>
                    <button type='button' onClick={() => handleDelete(e._id)} >Delete</button>
                </td>

            </tr>
        ))

    }else{
        emplist = <tr><td colSpan={6} align='center'>No Record Found</td></tr>
    }

    return (
        <div>
            <h1>Employees</h1>

            <form action="" onSubmit={handleSave}>

              { formdata._id ?  <input type="hidden"
                    value={formdata._id}
                    onChange={(e) => setFormData({ ...formdata, _id: e.target.value })}
                /> : ''
              
            }  

                <br />
                <label htmlFor="#">Employee Name</label>
                <input
                    type="text"
                    value={formdata.employeeName}
                    onChange={(e) => setFormData({ ...formdata, employeeName: e.target.value })}
                />
                <br />
                <br />
                <label htmlFor="#">Employee Age</label>
                <input
                    type="text"
                    value={formdata.employeeAge}

                    onChange={(e) => setFormData({ ...formdata, employeeAge: Number(e.target.value) })}

                />
                <br />
                <br />
                <label htmlFor="#">Employee Address</label>
                <input
                    type="text"
                    value={formdata.employeeAddress}
                    onChange={(e) => setFormData({ ...formdata, employeeAddress: e.target.value })}

                />
                <br />
                <br />
                <label htmlFor="#">Employee Phone</label>
                <input
                    type="text"
                    value={formdata.employeePhone}
                    onChange={(e) => setFormData({ ...formdata, employeePhone: e.target.value })}

                />
                <br />
                <br />

                <button type='submit'>Submit</button>
            </form>


            <table border={1}>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {emplist}
                </tbody>
            </table>

        </div>
    )
}

export default Employees