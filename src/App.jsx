import React from 'react';
import Form from './components/Form';
import List from './components/List';
import WithWorkServer from './hoc/WithWorkServer';

const App = (props)  => {
    const { data, loading, uptade, sendTo, remove } = props;
    return (
      <div className={"container"}>
        <Form 
          sendTo={sendTo}
        />
        <List
          todos={data}
          loading={loading}
          onTogle={uptade}
          onRemove={remove}
        />
      </div>
    );
}

export default WithWorkServer(App, 'api/todos')
