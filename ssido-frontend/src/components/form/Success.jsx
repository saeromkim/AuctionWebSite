import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

class Success extends Component{
    render(){
        const {values: { itemName, category, initPrice, hopePrice, itemStatus, dealOption, dealLocation, description }} = this.props;

        return(
            <div>
                <h1 className="ui centered">Confirm your Details</h1>
                <p>Click Confirm if the following details have been correctly entered</p>
                <List>
                    <List.Item>
                        <List.Icon name='itemName' />
                        <List.Content>First Name: {itemName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='category' />
                        <List.Content>Last Name: {category}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='initPrice' />
                        <List.Content>
                            initPrice: {initPrice}
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='hopePrice' />
                        <List.Content>hopePrice: {hopePrice}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='itemStatus' />
                        <List.Content>itemStatus: {itemStatus}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='dealOption' />
                        <List.Content>dealOption: {dealOption}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='dealLocation' />
                        <List.Content>dealLocation: {dealLocation}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='description' />
                        <List.Content>description: {description}</List.Content>
                    </List.Item>
                </List>

                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Confirm</Button>
            </div>
        )
    }
}

export default Success;