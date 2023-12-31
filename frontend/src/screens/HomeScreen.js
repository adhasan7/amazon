// import { useEffect, useReducer, useState } from "react";
// import axios from "axios";
// import logger from "use-reducer-logger";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Product from "../components/Product";
// import { Helmet } from "react-helmet-async";
// import MessageBox from "../components/MessageBox";
// import LoadingBox from "../components/LoadingBox";
// // import data from "../data";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_REQUEST":
//       return { ...state, loading: true };
//     case "FETCH_SUCCESS":
//       return { ...state, products: action.payload, loading: false };
//     case "FETCH_FAIL":
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };
// function HomeScreen() {
//   const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
//     products: [],
//     loading: true,
//     error: "",
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       dispatch({ type: "FETCH_REQUEST" });
//       try {
//         const result = await axios.get("api/products");
//         dispatch({ type: "FETCH_SUCCESS", payload: result.data });
//       } catch (err) {
//         dispatch({ type: "FETCH_FAIL", payload: err.message });
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <Helmet>
//         <title>Amazona</title>
//       </Helmet>
//       <h1>Jasa Modifikasi Pakaian</h1>
//       <div className='products'>
//         {loading ? (
//           <LoadingBox />
//         ) : error ? (
//           <MessageBox variant='danger'>{error}</MessageBox>
//         ) : (
//           <Row>
//             {products.map((product) => (
//               <Col key={product.slug} sm={4} md={3} lg={2} className='mb-3'>
//                 <Product product={product}></Product>
//               </Col>
//             ))}
//           </Row>
//         )}
//       </div>
//     </div>
//   );
// }
// export default HomeScreen;
// // berhasil

import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import logger from "use-reducer-logger";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../components/Product";
import { Helmet } from "react-helmet-async";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Amazona</title>
      </Helmet>
      <h1>Jasa Modifikasi Pakaian</h1>

      <div className='products'>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant='danger'>{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={4} md={3} lg={2} className='mb-3'>
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
