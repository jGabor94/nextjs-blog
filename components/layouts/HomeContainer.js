import { styled } from '@mui/material/styles';
import Stack from '@mui/system/Stack';

const HomeContainer = styled(Stack)(({ theme }) => ({
    background: "linear-gradient(225deg, rgba(41,195,199,1) 15%, rgba(255,255,255,1) 85%)",
    width: "100%",
    minHeight: "100vh",
    justifyContent:"center",
    alignItems:"center",
    flexWrap: "wrap",
    flexDirection: "row",
}))

export default HomeContainer