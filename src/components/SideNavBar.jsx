import React, { Component } from 'react';
import {Button,Icon,Menu,Sidebar} from 'semantic-ui-react';

class  SideNavBar extends Component {
  constructor(){
    super();
    this.state = {
      visible: false
     }
     this.handleButtonFocus = () => this.setState({ visible: !this.setState.visible}) 
  }
  
 
  

  componentWillMount(){
    document.addEventListener('mousedown', this.handleClick, false)
  }
  componentWillUnmount(){
    document.removeEventListener('mousedown', this.handleClick, false)
  }

  handleClick = (e) =>{
    if(this.node.contains(e.target)) {
      return;
    }else{
      this.setState({visible: false})
    }
    
    
  }

  render(){
    const {visible} = this.state;
    
    return (
    
      <div ref={node => this.node = node}>
        
       <Button onFocus={this.handleButtonFocus} style={{fontSize:'16px', borderRadius:'0', padding:'10px', margin:'10px',backgroundColor:'transparent',color:'#FFFFFF', border:'1px solid #FFFFFF'}}><Icon style={{marginLeft:'5px'}} name="bars" /></Button>
              <Sidebar style={{paddingTop:'50px'}} as={Menu} animation="overlay" width="wide" visible={visible} icon="labeled" vertical inverted>
                {visible ? console.log('clicked') : (console.log('out'))}
                <Menu.Item name="home">
                  <Icon name="home" />
                  Home
                </Menu.Item>
                <Menu.Item name="gamepad">
                  <Icon name="gamepad" />
                  Games
                </Menu.Item>
                <Menu.Item name="camera">
                  <Icon name="camera" />
                  Channels
                </Menu.Item>
              </Sidebar>
              
      </div>
    )
  }
}

export default SideNavBar;