import React,{Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartData:{
                labels:['Jakarta','Bandung','Surabaya','Tangerang'],
                datasets:[{
                    label:'Population',
                    data:[
                        120389,
                        223899,
                        149833,
                        127331
                    ],
                    backgroundColor:[
                        'rgb(255, 99, 132, 0.6)',
                        'rgb(54, 162, 235, 0.6)',
                        'rgb(54, 20, 235, 0.6)',
                        'rgb(255, 20, 235, 0.6)',
                    ]
                }]
            }
        };
    }

    render() {
        return(
            <div className="cart">
                <Bar
                    data={this.state.cartData}
                    options={{
                        title:{
                            display:true,
                            text:'Population in Indonesian Big City',
                            fontSize:25
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}
                />
            </div>
        );
    }
}

export default Cart;