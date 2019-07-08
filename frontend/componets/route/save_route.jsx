import React from 'react';

class SaveRoute extends React.Component {
  
  render(){
    return (
      <div>
        <section className='save-header'>
          <h1>Save</h1>
        </section>
        <section className='save-main'>
          <form>
            Enter a name and description for your route below. On the next page, you'll be able to see, edit, and share your route.
            <label>Type
              <input type="text"/>
            </label>
            <label>Route Name (required)
              <input type="text"/>
            </label>
            <label>Description
              <textarea type="text"/>
            </label>
            <input type="submit"/>
          </form>
        </section>
      </div>
    )
  }
}

export default SaveRoute;