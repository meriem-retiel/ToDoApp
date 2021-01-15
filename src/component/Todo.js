import React from "react"
import { Button, IconButton, Checkbox ,Grid ,List, ListItem,ListItemText ,ListItemSecondaryAction } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


const Todo = ({setFilterTodo,filterTodo,text,todo,setTodo,item})=>{

    //handel events 
    const checkHandler = ()=>{
        setTodo(todo.map((el)=>{
        if(el.id=== item.id){
            el.completed = true
        }
            return (el)
        }
        ));
    
    }
    const deleteHandler = () =>{
        setTodo(todo.filter((el)=>el.id !== item.id));
    }
return(
 <Grid >
     <List>
         <ListItem>
             <ListItemText>
                {text}
             </ListItemText>
             <ListItemSecondaryAction>
             <IconButton onClick={checkHandler}>
                    <CheckCircleIcon color= 'primary' />
                 </IconButton>
                 <IconButton onClick={deleteHandler}>
                    <DeleteIcon  color= 'primary' />
                 </IconButton>
                
             </ListItemSecondaryAction>
         </ListItem>

     </List>
 </Grid> 
)
}
export default Todo