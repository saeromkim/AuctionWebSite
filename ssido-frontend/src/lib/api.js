import axios from 'axios';
// import queryString from 'query-string';

export const makeRoom = ({itemName, category, initPrice, hopePrice, 
                    itemStatus, dealOption, dealLocation, description}) => 
                    axios.post('/api/makeRoom', { 
                        itemName, category, initPrice, hopePrice, 
                        itemStatus, dealOption, dealLocation, description });