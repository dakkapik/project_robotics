import React from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../../components/Nav/NavBar';
import Footer from '../../components/Footer/Footer';

function Join() {
  return (
    <div>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <NavBar />
      <Footer />
    </div>
  );
}

export default Join;
