import React from 'react';

class SaveRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log(this.props);
    return (
      <div className='save-route-modal'>
        <section className='save-header'>
          <h1>Save</h1>
        </section>
        <section className='save-main'>
          <form>
            Enter a name and description for your route below. On the next page, you'll be able to see, edit, and share your route.
            <div className='inline-row'>
              <label>Type
                <input type="text"/>
              </label>
              <label>Route Name (required)
                <input type="text"/>
              </label>
            </div>
            <label htmlFor='description'>Description
            </label>
              <textarea id='description' type="text"/>
            <input className='modal-save-btn' type="submit"/>
          </form>
        </section>
      </div>
    )
  }
}

export default SaveRoute;