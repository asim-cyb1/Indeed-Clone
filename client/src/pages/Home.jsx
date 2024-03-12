import { Box, Typography, styled, Button } from "@mui/material";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";


const Component = styled(Box)({
    display: "flex",
    height: "100vh",
    alignItems: "center",
    margin: "0 100px",
    '& > div': {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        '& > p': {
            fontSize: 56,
            lineHeight: 1.25,
            letterSpacing: -1
        },
        '& > button' : {
            width: 220,
            height: 60,
            background: 'rgb(37, 67, 187)',
            textTransform: 'none'
        }


    }
})
const Home = () => {
    const navigate = useNavigate();
    const animatedImage = "https://images.ctfassets.net/pdf29us7flmy/5r34jiS1YfJuoRzqp3XH6y/6fba6547e16cd0ad08ae28dad306015d/Screen_Shot_2023-01-11_at_9.21.31_AM.png?w=720&q=100&fm=avif";
    return (
        <div>
           
        <Header />
        <Component>
            <Box>
                <Typography>Let's make your next <br /> great Hire Fast</Typography>
                <Link to="/create">
                <Button variant='contained' >Post a Job</Button> </Link>
            </Box>
            <Box>
                <img src={animatedImage} />

            </Box>
        </Component>
        </div>
    );
}
export default Home;
