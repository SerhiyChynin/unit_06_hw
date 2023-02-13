import React from 'react';

class Homework1 extends React.Component{
    constructor(props) {
        super();
        this.state = {
            s1: props.p1
        }
        this.s2 = 201;
    }
    
    componentDidMount() {
        let val_1 = this.state.s1;
        this.setState({ s1: val_1 + 5 })

        let val_2 = this.s2;
        this.s2 = val_2 + 5; 
    }
    
        buttonHandler = () => {
            let val_1 = this.state.s1;
            
            this.setState({ s1: val_1 + 50})

            let val_2 = this.s2;
            this.s2 = val_2 + 50;    
        }
    
    render() {
        return (
            <>
            <div>
                    {this.state.s1} 
                </div>
            <div>
                    {this.s2}
                </div>
                <button onClick={this.buttonHandler}>Push</button>
            </>
            
        )
    }
}
export default Homework1;