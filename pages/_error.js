import React, { useCallback, useEffect } from 'react';

const ErrorPage = ({ statusCode, stack }) => {
  return (
    <>
      <h1>Error {statusCode}</h1>
      <p>{stack}</p>
    </>
  );
};

ErrorPage.getInitialProps = async (ctx) => {
  const { res, err } = ctx;

  // resolve a status-code
  const statusCode = (res && res.statusCode) || (err && err.statusCode);

  return { statusCode, stack: err && err.stack };
};

export default ErrorPage;
