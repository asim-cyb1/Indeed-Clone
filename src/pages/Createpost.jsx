import Header from "../components/Header";
import { Box, Typography, styled, TextField, Button } from "@mui/material";
import DropDown from "../components/dropdown";
import { useState } from "react";
import { SaveJob } from "../services/api";

const Component = styled(Box)({
    padding: '80px 200px',
    background: '#F5F5F5'
})
const Container = styled(Box)({
    display: 'flex',
    background: '#ffffff',
    borderRadius:20,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 70px',
    '&>p':{
        fontSize: 35,
        fontWeight: 700,
        opacity: '0.7'
    }
})
const Wrapper = styled(Box)({
    display:'flex',
    flexDirection: 'column',
    marginTop: 20,
    padding: 20,
    background: '#ffffff',
    borderRadius:20,
    '&>*':{
        marginTop: '20px !important'
    }
})
const defaultObj = {
    profile: "",
    type:"",
    description:"",
    experience:"",
    technology:[],
    salary:""

}
const options = {
    type: ["Remote","In-person"],
    experience: ["0-2 years","3-5 years","5 years+"],
    technology: ["Java","Python","C++","C programming"],
    salary: ["$50000","$60,000-70,000","80,000-100,000","100k+"]
}


const CreatePost = () => {
    const [data,setData] = useState(defaultObj);
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }
    const SavePost = async() => {
        await SaveJob(data);
    
    }
    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3zkKYlIHjjoQrE4e-a5xiJIaK0reWlcDhewsx8rjV87d8M82";
    return(
        
        <>
        <Header />
        <Component>
            <Container>
                <Typography>Create a job Post</Typography>
                <img src={image}/>
                
            </Container>
            <Wrapper>
                <TextField placeholder="Job Title" name="profile" onChange={handleChange}></TextField>
                <DropDown name="type"  id="job-type-label" value={data.type} handleChange={handleChange} label="Job type" options={options.type}/>
                <TextField placeholder="Job Description" name="description" onChange={handleChange}></TextField>
                <DropDown name="experience" id="job=experience-label" value={data.experience} handleChange={handleChange} label="experience" options={options.experience}/>
                <DropDown name="technology" id="job-technology-label" value = {data.technology} handleChange={handleChange} label="technology" options={options.technology} multiple/>
                <DropDown name="salary" id="job-salary-label" value={data.salary} handleChange={handleChange} label="salary" options={options.salary}/>
                <Button variant="contained" onClick={() => SavePost()}>Create Job</Button>
            </Wrapper>
        </Component>
        </>
    );
}
export default CreatePost;