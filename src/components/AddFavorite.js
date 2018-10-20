import React, {Component} from 'react';

class AddFavorite extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <input
        type="submit"
        id="btnAddFavorite"
        className="btn btn-full"
        onClick={this.props.addFavorites}
        value="Add to Favarites"
      />
    )
  }
}

export default AddFavorite;
