import React from 'react';
import { Helmet } from 'react-helmet';

const AppTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default AppTitle;
