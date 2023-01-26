import React from 'react';
import { useNavigate, useParams } from 'react-router';

const withRouter = (WrappedComponent) => (props) => {
  console.log(props);
  const navigate = useNavigate();
  const params = useParams();
  return <WrappedComponent navigate={navigate} params={params} {...props} />;
};

export default withRouter;
