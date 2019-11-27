import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';


class TarzanCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        result: '',
        num1: '',
        num2: '',
        pay_us_per_month : '',
        only : '',
        payment_cap : '320000',

        };

        this.handlenum1Change = this.handlenum1Change.bind(this);
        this.handlenum2Change = this.handlenum2Change.bind(this);
    }

    handlenum1Change(event) {
        this.setState({ num1: Number(event.target.value) });
    } 

    handlenum2Change(event) {
        this.setState({ num2: Number(event.target.value) });
    }

    addAction = () => {
        const x = this.state.num1 + this.state.num2
        this.setState({result: x })
    }

    subAction = () => {
        const x = this.state.num1 - this.state.num2
        this.setState({result: x })
    }

    tarzanPercent = () => {
        const perMonth = (this.state.num1/12) * 0.17
        const total = this.state.pay_us_per_month*36
        if(this.state.num1 >= 350000) {
            this.setState({pay_us_per_month: perMonth })
        }
        else if(this.state.num1 <= 350000) {
            this.setState({pay_us_per_month: 0 })
        }
        if(this.state.pay_us_per_month*36 >= 320000){
                this.setState({only : 320000})
        } else {
            this.setState({only : total})
        }
        
    }

render() {
 return (
    <div style={{backgroundColor:'#a4acb4', padding:'10px', borderRadius:'10px'}}>
        <Form>
            <Form.Row>
                <Col>
                    <h5 style={{fontFamily:'monospace', backgroundColor:'#b3cde0', borderRadius:'10px', padding:'5px'}}> Please enter your expected annual salary in numbers and click on Submit Button</h5>
                    <Form.Control type="text" onChange={this.handlenum1Change}  />

                </Col>
                {/* <Col>
                    <Form.Control type="text"  onChange={this.handlenum2Change} />
                </Col> */}
            </Form.Row>
        </Form>
        <div style={{margin:'5px', display:'flex', justifyContent:'center'}}>
            {/* <Button style={{margin:'10px'}} variant="info" onClick={this.addAction}> + </Button>
            <Button style={{margin:'10px'}} variant="warning" onClick={this.subAction}> - </Button> */}
            <Button style={{margin:'5px', backgroundColor:'#3f6184', border:'0px', opacity:2, color:'white', fontFamily:'monospace', fontSize: '25px'}} onClick={this.tarzanPercent}>  Submit  </Button>
        </div>
        <br />
        <div >
        
        {/* <h2 style={{fontFamily:'monospace', backgroundColor:'#d99aa6', borderRadius:'10px', padding:'5px'}}> Result : {this.state.result} </h2> */}
        <h3 style={{fontFamily:'monospace', backgroundColor:'#444952', borderRadius:'10px', padding:'5px', color:'white'}}> Your expected annual salary is : {this.state.num1}₹​ </h3>
        <h3 style={{fontFamily:'monospace', backgroundColor:'#444952', borderRadius:'10px', padding:'5px', color:'white'}}> Your monthly salary is : {this.state.num1/12}₹​ </h3>

        {(this.state.num1 <= 350000 ? (
            <h3 style={{fontFamily:'monospace', backgroundColor:'#444952', borderRadius:'10px', padding:'5px', color:'white'}}> your expected annual salary is less than 350000₹ </h3>
        ):(
            <h3 style={{fontFamily:'monospace', backgroundColor:'#444952', borderRadius:'10px', padding:'5px', color:'white'}}> Pay us per Month : {this.state.pay_us_per_month}₹ </h3>

        )
        )}
        {/* <h3 style={{fontFamily:'monospace', backgroundColor:'#6497b1', borderRadius:'10px', padding:'5px', color:'white'}}> Pay us per Month : {this.state.pay_us_per_month}₹ </h3> */}
        {/* <h3 style={{fontFamily:'monospace', backgroundColor:'#d99aa6', borderRadius:'10px', padding:'5px'}}> Capped To : { this.state.pay_us_per_month*36 > 320000 ? '320000' : this.state.pay_us_per_month*36 } </h3> */}
        <h3 style={{fontFamily:'monospace', backgroundColor:'#444952', borderRadius:'10px', padding:'5px', color:'white'}}> For 36 months value will be  : {this.state.pay_us_per_month*36}₹ </h3>
        <h3 style={{fontFamily:'monospace', backgroundColor:'#444952', borderRadius:'10px', padding:'5px', color:'white'}}> Payment Cap : {this.state.payment_cap}₹ </h3>

        <h3 style={{fontFamily:'monospace', backgroundColor:'#444952', borderRadius:'10px', padding:'5px', color:'white'}}> Total amount you have to pay is : {this.state.only}₹ </h3>

        </div>
        
    </div>
                 
    );
  }
}

export default TarzanCalculator;