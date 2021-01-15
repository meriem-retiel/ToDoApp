import React , {useState} from "react"
import { IconButton, TextField, Select  , MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';



const useStyles = makeStyles((theme) => ({
  
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
 
  }));

const Form = (props) => {
    
    const classes = useStyles()

    const submitTodoHandler = (e)=>{
        e.preventDefault();
        props.setTodo(
            [...props.todo,{text:props.inputText , completed : false , id: Math.random() *1000} ]
        )
        props.setInputText("")
    }
    const inputHandler = (e)=> {
        props.setInputText(e.target.value)
       
    }
    const completedHandler = (e)=> {
        props.setCompleted(e.target.value)
    }

    const [inputForm, setInputForm] = useState("");
    return(
        <form>
        <TextField   value={props.inputText} clearButtonMode='always' id="standard-basic" label="Nouvelle tache" variant="standard" onChange={inputHandler} />
        <IconButton  onClick={submitTodoHandler}  >
<AddCircleIcon color= 'primary' />
        </IconButton>
    
        <Select
          value={props.completed}
          onChange={completedHandler}
          displayEmpty
        className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'completed'}>Completed</MenuItem>
          <MenuItem value={'uncompleted'}>Uncompleted</MenuItem>
        </Select>
          
        </form>
    )
};
export default Form;