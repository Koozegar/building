import TreeView from "./treeView";
import Floor from './floor-frame';
import FloorContent from "./FloorContent";
import { Grid, Paper } from "@mui/material";
import CustomizedDialogs from "./task-dialog";
import Sidebar from "./sidebar";
function MainView (){
    return(
        <Grid
        sx={{height:'100vh'}}
        container
        direction="row" 
        justifyContent="flex-end"
        alignItems="flex-s"
        >

     <Paper  sx={{height:'705px' , backgroundColor:'#F3F3F3' , borderRadius:'12px',margin:'10px 10px',padding:'6px'}}>
        <FloorContent/>
        <FloorContent/>
        <FloorContent/>
        <FloorContent/>
        <FloorContent/>
        <FloorContent/>
        <FloorContent/>
     </Paper>

     <Paper  sx={{height: '705px' , backgroundColor:'#F3F3F3' , borderRadius:'12px',margin:'10px 20px 0px 0px',padding:'6px'}}>
            <Floor FloorNumber={7}/>
            <Floor FloorNumber={6}/>
            <Floor FloorNumber={5}/>
            <Floor FloorNumber={4}/>
            <Floor FloorNumber={3}/>
            <Floor FloorNumber={2}/>
            <Floor FloorNumber={1}/>
            </Paper>
        <Grid sx={{margin:'10px 20px 0px 0px' , padding:'6px'}}>
        <Sidebar/>
        </Grid>
        </Grid>
    )
}
export default MainView;