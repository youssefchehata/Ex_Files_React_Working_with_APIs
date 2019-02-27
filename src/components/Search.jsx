// import React, { Component } from 'react';
// import axios from 'axios';

// class Search extends Component {
//   state = {search:[]};

//   componentDidMount() {
//     const url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyD3qVS25oFczR7FBH41CxqcIrdppkmbu7U&cx=017576662512468239146:omuauf_lfve&q=lectures`;

//     axios
//       .get(url)
//       .then(response => {
//         this.setState({
//           search: response.data.details
//         });
//       })
//       .catch(error => console.log(error));
//   }

//   render() {
//     return (
//       <nav>
//         <div className="nav-wrapper">
//           <form>
//             <div className="input-field">
//               <input id="search" type="search" required />
//               <label className="label-icon" for="search">
//                 <i className="material-icons">search</i>
//               </label>
//               <i className="material-icons">close</i>
//             </div>
//           </form>
//         </div>
//       </nav>
//     );
//   }
// }

// export default Search;
