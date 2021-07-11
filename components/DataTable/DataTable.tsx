import React, {useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { server_calls } from '../../api'; // ADD THIS
import { useGetData } from '../../custom-hooks'; // ADD THIS
import { Button,Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle } from '@material-ui/core'; // ADD THESE
import { Vehicle } from '../../components/Vehicle'; // ADD THIS

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    // },
  ];
  const rows = [
    { id: 1, lastName: 'McLaren', firstName: 'Malcolm G.', age: 64 },
    { id: 2, lastName: 'Billig', firstName: 'Jeremy D.', age:  38},
    { id: 3, lastName: 'Sobti', firstName: 'Lakshya ', age:  46},
    { id: 4, lastName: 'Brangaccio', firstName: 'Donna M.', age:  undefined},        //Info on team mclaren is all over the place, Innaccurate sources.
    { id: 5, lastName: 'Khan', firstName: 'Gul B.', age:  undefined},                 //Info on team mclaren is all over the place, Innaccurate sources.
    { id: 6, lastName: 'McLaren', firstName: 'David W.', age:  undefined},          //Info on team mclaren is all over the place, Innaccurate sources.
    { id: 7, lastName: 'Lucke', firstName: 'Annette', age:  undefined},               //Info on team mclaren is all over the place, Innaccurate sources.
    { id: 8, lastName: 'McCarthy', firstName: 'William J.', age:  undefined},       //Info on team mclaren is all over the place, Innaccurate sources.
    { id: 9, lastName: 'Moss-Heitlager', firstName: 'Denisa', age: undefined},       //Info on team mclaren is all over the place, Innaccurate sources.
  ];


  interface gridData{
    data:{
      id?:string;
    }
  }


  export const DataTable =  () => {
  
    let { vehicleData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data:{}})
  
    let handleOpen = () => {
      setOpen(true)
    }
  
    let handleClose = () => {
      setOpen(false)
    }
  
    let deleteData = () => {
      server_calls.delete(gridData.data.id!)
      getData()
    }
  
    console.log(gridData.data.id)
  
      return (
          <div style={{ height: 400, width: '100%' }}>
            <h2>Cars In Inventory</h2>
            <DataGrid rows={vehicleData} columns={columns} pageSize={5} checkboxSelection onRowSelected = { setData } />
  
          <Button onClick={handleOpen}>Update</Button>
          <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
  
            {/*Dialog Pop Up begin */}
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Car</DialogTitle>
            <DialogContent>
              <DialogContentText>Update Vehicle</DialogContentText>
                <Vehicle id={gridData.data.id!}/>
            </DialogContent>
            <DialogActions>
              <Button onClick = {handleClose} color="primary">Cancel</Button>
              <Button onClick={handleClose} color = "primary">Done</Button> 
            </DialogActions>
          </Dialog>
          </div>
        );
  }

  export const DataTable = () => {
    let { vehicleData, getData } = useGetData();

    console.log(vehicleData)
    return (
        <div style={{ height: 400, width: '100%' }}>
          <h2>Cars In Inventory</h2>
          <DataGrid rows={vehicleData} columns={columns} pageSize={5} checkboxSelection />
        </div>
      );
}
