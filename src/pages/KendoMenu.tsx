import * as React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Menu, MenuSelectEvent, MenuItem } from '@progress/kendo-react-layout';
import items from '../resources/items.json';
import { withRouter } from './RoutingHelpers';

const KendoMenu = (props: any) => {
  const navigate = useNavigate()
    const onSelect = (event: any) => {
      console.log(event);   
      navigate(event.item.route);
    };
    return ( 
              <div className='headmenu'>
                  <Menu items={items} onSelect={onSelect}   style={{
                  height: "38px",
                  marginLeft: "5px"}} 
                  /> 
              </div>
              );
    };
export default withRouter(KendoMenu);