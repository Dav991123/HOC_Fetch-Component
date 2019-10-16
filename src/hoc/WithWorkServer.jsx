import React from 'react';
const WithWorkServer = (Component, apiUrl) => {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                data: [],
                loading: false,
                error: null
            };
            this.gettingData = this.gettingData.bind(this);
            this.specificChange = this.specificChange.bind(this);
            this.sendTo = this.sendTo.bind(this);
            this.remove = this.remove.bind(this);
        }
        componentDidMount() {
            this.gettingData()
        }

        async gettingData() {
            this.setState({loading: true})
            try {
                const response = await fetch(apiUrl) ;
                const data = await response.json();
                this.setState({data, loading: false})
            }catch (error) {
                this.setState({error, loading: false})
            }
        }
        specificChange(id) {
            fetch(`${apiUrl}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    completed: true
                })
            })
            .then(response => response.json())
            .then(uptadeItem => {
                const data = this.state.data.map(item => {
                    if(item.id !== uptadeItem.id) {
                        return item
                    }
                    return {
                        ...item,
                        ...uptadeItem
                    } 
                })
                this.setState({data});
            })
        }
       async sendTo(data) {
           try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Accept' : 'application/json',
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                const addData = await response.json();
                this.setState({data: [...this.state.data, addData]})
           }catch(error) {
                this.setState({
                    error
                })
           }
        }
        async remove(id) {
            await fetch(`${apiUrl}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                }
            });
            this.gettingData()
        }
        render() {
            const { data, loading, error } = this.state;
            return (
                <Component 
                    data={data}
                    loading={loading}
                    error={error}
                    uptade={this.specificChange}
                    sendTo={this.sendTo}
                    remove={this.remove}
                />
            )
        }
    }
}
export default WithWorkServer;