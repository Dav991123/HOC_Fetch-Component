import React from 'react';
import Form from './components/Form';
import List from './components/List';
import WithWorkServer from './hoc/WithWorkServer';

const App = (props)  => {
    const { data, loading, error, uptade } = props;
    return (
      <div className={"container"}>
        <Form />
        <List
          todos={data}
          loading={loading}
          onTogle={uptade}
        />
      </div>
    );
}

export default WithWorkServer(App, 'api/todos')
