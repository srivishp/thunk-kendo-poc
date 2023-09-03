import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { ColumnMenu, ColumnMenuCheckboxFilter } from "./columnMenu";

const ReusableDataGrid = (props: any) => { 
    return (
      <Grid
      data={props.products}
      {...props.dataState}
      onDataStateChange={props.onDataStateChange}
      sortable={true}
      pageable={true}
      pageSize={15}
      style={{
        height: "538px",
        marginLeft: "25px"
      }}   
      >
         {props.GridColumns
        .filter((col:any) => props.hiddenColumns.has(col.field))
        .map((column:any, index:any) => {
          return (
            <Column  
              field={column.field}
              title={column.title}
              key={column.field} 
              columnMenu={ColumnMenuCheckboxFilter}
            />
          );
        })} 
    </Grid>
      );
}
export default ReusableDataGrid;