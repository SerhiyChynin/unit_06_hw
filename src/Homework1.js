import React from 'react';

class Homework1 extends React.Component{
    constructor(props, s2=201) {
        console.log(props.p1)
        super();
        this.state = {
            s1: props.p1
        }
        this.s2 = s2;
    }
    render() {
        console.log('Hello')
        return (
            <>
                {console.log('Baby!')}
            </>
        )
    }
}
export default Homework1;