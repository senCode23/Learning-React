import { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
                <div>
                    <button onClick={() => this.fuc1()}>Button</button>
                </div>
                <div style={{ backgroundColor: 'grey', textAlign: 'center',color:'white' }}>Footer</div>

                
            </>
        )
    };

    fuc1() {
        console.log('fuc1')
    }
}


