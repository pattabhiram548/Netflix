import React from 'react'
import Main from '../../componenets/Main'
import requests from '../../Requests'
import Row from '../../componenets/Row'


const Home = () => {
  return (
    <>
      <Main></Main>
      <Row rowID="5" title="Up coming" fetchURL={requests.requestUpcoming } />
      <Row rowID="1" title="Popular" fetchURL={requests.requestPopular } />
      <Row rowID="2" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="3" title="Top Rated" fetchURL={requests.requestTopRated } />
      <Row rowID="4" title="Horror" fetchURL={requests.requestHorror } />
    

    </>
  )
}

export default Home 