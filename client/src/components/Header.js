import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import { Menu } from 'semantic-ui-react';


export default class Header extends React.Component {
    state = {activeItem:'home'}

    handleItemClick = (e, { name } ) => this.setState({ activeItem : name});
       
        
     

    render(){
        const { activeItem } = this.state
    return (
      
      <Menu pointing>
          <Menu.Item
          as={Link} to='/'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}>
          Streamy</Menu.Item>

         

         <Menu.Menu position='right'>
         <Menu.Item
                 as={Link} to='/'
                 name='list'
                 active={activeItem === 'list'}
                 onClick={this.handleItemClick}>
                Streams
             </Menu.Item>
             <GoogleAuth />
         </Menu.Menu>
    </Menu>          
         
    );
    }
};
