import * as React from "react";
import {
  GridColumnMenuFilter,
  GridColumnMenuCheckboxFilter,
} from "@progress/kendo-react-grid"; 
import products from "../resources/products.json";
export const ColumnMenu = (props: any) => {
  return (
    <div>
      <GridColumnMenuFilter {...props} expanded={true} />
    </div>
  );
};
export const ColumnMenuCheckboxFilter = (props: any) => {
  return (
    <div>
      <GridColumnMenuCheckboxFilter
        {...props}
        data={products}
        expanded={true}
      />
    </div>
  );
};