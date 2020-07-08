import React from 'react';
import '../css/buttons.css';
import { render } from '@testing-library/react';
function Func(props)
{
    return(<button name={props.number} onClick={(event)=>props.buttonPressed(props.number)}>{props.number}</button>)
}

class Buttons extends React.Component
{

    buttonpressed(e)
    {
        console.log('1233223',e.target.name)
        this.props.buttonpressed(e.target.name);
    }
    render()
    {
        return(<div>
            <div className='numbers'>
                <Func number={'1'}  buttonPressed={this.props.buttonpressed} />
                <Func number={'2'} buttonPressed={this.props.buttonpressed}/>
                <Func number={'3'} buttonPressed={this.props.buttonpressed}/>
                <br />
                <Func number={'4'} buttonPressed={this.props.buttonpressed}/>
                <Func number={'5'} buttonPressed={this.props.buttonpressed}/>
                <Func number={'6'} buttonPressed={this.props.buttonpressed}/>
                <br />
                <Func number={'7'} buttonPressed={this.props.buttonpressed}/>
                <Func number={'8'} buttonPressed={this.props.buttonpressed}/>
                <Func number={'9'} buttonPressed={this.props.buttonpressed}/>
                <br />
                <Func number={'0'} buttonPressed={this.props.buttonpressed}/>
           </div>
           <br />
           <div className='operations'>
           <Func number={'/'} buttonPressed={this.props.buttonpressed}/>
           <Func number={'*'} buttonPressed={this.props.buttonpressed}/>
           <Func number={'+'} buttonPressed={this.props.buttonpressed}/>
           <Func number={'-'} buttonPressed={this.props.buttonpressed}/>
           <Func number={'='} buttonPressed={this.props.buttonpressed}/>
           <Func number={'CE'} buttonPressed={this.props.buttonpressed}/>
           </div>
        </div>)
    }
}
export default Buttons;