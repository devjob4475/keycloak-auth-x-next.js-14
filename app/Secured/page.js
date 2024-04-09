import PrivateRoute from '../../helpers/PrivateRoute';
import React from 'react';


const Secured = () => {

 return (
   <div>
     <PrivateRoute>
       <h1 className="text-black text-4xl flex justify-center pt-3">Welcome to the Protected Page.</h1>
     </PrivateRoute>
   </div>
 );
};

export default Secured;