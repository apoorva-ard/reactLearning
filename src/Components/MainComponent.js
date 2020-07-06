import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent'
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }
    onDishSelect(dishId) {
        this.setState({
            selectedDish: dishId
        });
    }
    
    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/home' component={ HomePage } />
                    <Route path='/contactus' component={ Contact }/>
                    <Route path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </React.Fragment>
        );
    }
}
export default Main;