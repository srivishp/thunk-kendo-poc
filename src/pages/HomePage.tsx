import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DataResult, process, State } from '@progress/kendo-data-query';
import {
    Grid, GridColumn as Column,
    GridDataStateChangeEvent
} from '@progress/kendo-react-grid';
import { ColumnMenu } from './columnMenu'; 
import products from "../resources/products.json";
import Button from '@mui/material/Button';
import ReusableDataGrid from "../components/ReusableDataGrid";

export interface ProductCategory {
  CategoryID?: number,
  CategoryName?: string,
  Description?: string,
  details?: any
}

export interface Product {
  ProductID: number,
  ProductName?: string,
  SupplierID?: number,
  CategoryID?: number,
  QuantityPerUnit?: string,
  UnitPrice?: number,
  UnitsInStock?: number,
  UnitsOnOrder?: number,
  ReorderLevel?: number,
  Discontinued?: boolean,
  Category?: ProductCategory,
  expanded?: boolean,
  inEdit?: boolean | string,
  locked?: boolean
}

export interface columnInterface {
  title?: string,
  field?: string,
  show?: boolean,
  filter?: "boolean" | "numeric" | "text" | "date" | undefined,
  minWidth?: number,
  minGridWidth?: number,
  locked?: boolean,
  width?: string | number
}

const GridColumns: Array<columnInterface> = [
  { field: 'ProductID', title: 'ID', minWidth: 50 },
  { field: 'ProductName', title: 'Name', minWidth: 200 },
  { field: 'Category.CategoryName', title: 'CategoryName', minWidth: 200 },
  { field: 'UnitPrice', title: 'Price', minWidth: 100 },
  { field: 'UnitsInStock', title: 'In stock', minWidth: 100 },
  { field: 'UnitsOnOrder', title: 'UnitsOnOrder', minWidth: 100 },
  { field: 'ReorderLevel', title: 'ReorderLevel', minWidth: 100 },
  { field: 'Discontinued', title: 'Discontinued', minWidth: 100 },
  { field: 'Category', title: 'Category', minWidth: 100 }
];

type GridRowProps = {
  field: any;
  label: any;
  checked: boolean;
  onChange: any;
  checkedColumns: any;
  showHideContent: any;
  parentToChild: any;
  onClick: any;
};

const CheckboxRow = React.memo(({ field, label, checked, onChange } : GridRowProps) => {
  const handleChange = React.useCallback(
    (event: { target: { checked: any; }; }) => {
      onChange(field, event.target.checked);
    },
    [field, onChange]
  );

  return (
    <div id="mySidenav">
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />{' '}
        {label}
      </label>
    </div>
  );
});

const HiddenColumns = ({ onClick, onChange, checkedColumns, showHideContent, parentToChild } : GridRowProps ) => {
  const handleChange = React.useCallback(
    (field: unknown, checked: any) => {
      const newState = new Set(Array.from(checkedColumns));
      if (checked) newState.add(field);
      else newState.delete(field);
      onChange(newState);
    },
    [checkedColumns]
  );
  
  return (
    <div className={parentToChild}> 
      <Button className='bclose' onClick={onClick}>x</Button>
      <div >
        {GridColumns.map((col) => (
          <CheckboxRow
            field={col.field}
            label={col.title}
            onChange={handleChange}
            checked={checkedColumns.has(col.field)} checkedColumns={undefined} showHideContent={undefined} parentToChild={undefined} onClick={undefined}          />
        ))}
      </div>
    </div>
  );
};


const createDataState = (dataState: State) => {
    return {
        result: process(products.slice(0), dataState),
        dataState: dataState
    };
}



const HomePage = () => {

    let initialState = createDataState({
        take: 15,
        skip: 0
    });

    const [data, setData] = React.useState('sidenav');
 
    const parentToChild = () => {
      setData("sidenavopen");
    }

    const [showHideContent, setShowHideContent] = React.useState("sidenav");
    const [gridData, setGridData] = React.useState<Array<Product>>(products);
    const [hiddenColumns, setHiddenColumns] = React.useState(new Set());
  
    const handleHiddenColumnsChange = React.useCallback((columns: any) => {
      setHiddenColumns(new Set([...columns]));
      
    }, []);

    const [result, setResult] = React.useState<DataResult>(initialState.result);
    const [dataState, setDataState] = React.useState<State>(initialState.dataState);

    const dataStateChange = (event: GridDataStateChangeEvent) => {
        let updatedState = createDataState(event.dataState);
        setResult(updatedState.result);
        setDataState(updatedState.dataState);
    }

   // const toggleVisibility = () => setShowHideContent((value) => (value === "sidenav" ? "sidenavopen" : "sidenav"));
    const handleChildtoParent = React.useCallback(() => { 
      setData("sidenav");
    },[]);
 
    return (
      <div>
        <div>
        
        </div>
        <div className="outer">
    <div className="inner rotate" onClick={() => parentToChild()}>
      Appearance</div>
</div>

      <HiddenColumns
          checkedColumns={hiddenColumns}
          onChange={handleHiddenColumnsChange} 
          field={undefined} 
          label={undefined} 
          checked={false} 
          showHideContent={showHideContent}
          parentToChild={data}
          onClick={handleChildtoParent} 
          />



<ReusableDataGrid 
products={result}  
GridColumns={GridColumns} 
hiddenColumns={hiddenColumns}
onDataStateChange={dataStateChange}
dataState={dataState}
/> 



      </div>
    );
}
export default HomePage;