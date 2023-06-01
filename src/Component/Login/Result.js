// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';

// const Result = () => {
//   const location = useLocation();
//   const [content, setContent] = useState([]);

//   useEffect(() => {
//     if (location.state && location.state.type) {
//       fetchData(location.state.type);
//     }
//   }, [location]);

//   const fetchData = (type) => {
//     const url = type === 'RD' ? 'http://localhost:8000/rd/' : 'http://localhost:8000/db/';

//     axios
//       .get(url)
//       .then((response) => {
//         console.log(`${type} button clicked`);
//         console.log('Response:', response.data);
//         setContent(response.data);
//       })
//       .catch((error) => {
//         console.error(`Error fetching ${type} data:`, error);
//       });
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Member</th>
//             <th>Position</th>
//             <th>Remarks</th>
//             <th>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {content.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.member}</td>
//               <td>{item.position}</td>
//               <td>{item.remarks}</td>
//               <td>{item.date}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Result;
