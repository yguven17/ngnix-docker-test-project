import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {

  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
  })
  const [formData1, setFormData1] = useState({
    input1: "",
    input2: "",
  })
  const [formData2, setFormData2] = useState({
    input1: "",
    input2: "",
  })
  const [response, setResponse] = useState("")
  const [response1, setResponse1] = useState("")
  const [response2, setResponse2] = useState("")
  const [api4Data, setApi4Data] = useState([])
  const [click, setClick] = useState(false)
  const api = "http://0.0.0.0:8000"
  const apiB = "http://0.0.0.0:8001" 
  const apiC = "http://0.0.0.0:8002" 

  const getApi = () => {
    axios.get(`${apiC}/api4`)
      .then(res => setApi4Data(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getApi()
  }, [click])

  const handleSubmitB = async (props, data) => {
    console.log(data)
    await axios.post(`${apiB}/${props}`, data)
      .then(res => {
        switch (props) {
          case "api1": setResponse(res.data)
            break;
          case "api2": setResponse1(res.data)
            break;
          case "api3": setResponse2(res.data)
            break;
          default:
            break;
        }
      })
  }

  const handleSubmitC = async (props, data) => {
    console.log(data)
    await axios.post(`${apiC}/${props}`, data)
      .then(res => {
        switch (props) {
          case "api1": setResponse(res.data)
            break;
          case "api2": setResponse1(res.data)
            break;
          case "api3": setResponse2(res.data)
            break;
          default:
            break;
        }
      })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleChange1 = (e) => {
    setFormData1({ ...formData1, [e.target.name]: e.target.value })
  }
  const handleChange2 = (e) => {
    setFormData2({ ...formData2, [e.target.name]: e.target.value })
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "100px" }}>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "150px" }}>

        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <p>Enter Name</p>
          <input name='Name' value={formData.input1} onChange={(e) => handleChange(e)} />
          <input name='Surname' value={formData.input2} onChange={(e) => handleChange(e)} />
          <button onClick={() => handleSubmitB("api1", formData)}>Submit</button>
          <p>{response.message}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <p>Validate</p>
          <input name='Name' value={formData1.input1} onChange={(e) => handleChange1(e)} />
          <input name='Surname' value={formData1.input2} onChange={(e) => handleChange1(e)} />
          <button onClick={() => handleSubmitB("api2", formData1)}>Submit</button>
          <p>{response1.message}</p>

        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <p>Delete</p>
          <input name='Name' value={formData2.input1} onChange={(e) => handleChange2(e)} />
          <input name='Surname' value={formData2.input2} onChange={(e) => handleChange2(e)} />
          <button onClick={() => handleSubmitC("api3", formData2)}>Submit</button>
          <p>{response2.message}</p>

        </div>
      </div>
      <div>
        <table className="styled-table">
          <thead>
            <tr>
              <th>id</th>
              <th>created_at</th>
              <th>updated_at</th>
              <th>input1</th>
              <th>input2</th>
            </tr>
          </thead>
          <tbody>
            {api4Data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.created_at}</td>
                <td>{item.updated_at}</td>
                <td>{item.input1}</td>
                <td>{item.input2}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => setClick(!click)}>Güncelle</button>
      </div>
    </div>
  )
}

export default App
