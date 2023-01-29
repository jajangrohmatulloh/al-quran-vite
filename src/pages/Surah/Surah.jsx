import React, { Component } from 'react';
import ListSurah from '../../components/atoms/ListSurah/ListSurah';
import Loader from '../../components/atoms/Loader/Loader';
import alquran from '../../assets/images/al-quran.png';
import withRouter from '../withRouter';

class Surah extends Component {
  state = {
    lists: [],
    load: true,
  };

  componentDidMount() {
    fetch('https://api.alquran.cloud/v1/surah')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          lists: res.data,
          load: false,
        });
      });
  }

  handleClick = (id) => {
    this.props.navigate(`/surah/${id}`);
  };

  render() {
    return (
      <>
        <header
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div>Surah</div>
        </header>

        <div className="container">
          {this.state.load && (
            <div className="loader-wrapper">
              <Loader />
            </div>
          )}
          <div className="image">
            <img src={alquran} alt="" />
          </div>

          {this.state.lists.map((list) => (
            <ListSurah data={list} goDetail={this.handleClick} />
          ))}
        </div>
      </>
    );
  }
}
export default withRouter(Surah);
