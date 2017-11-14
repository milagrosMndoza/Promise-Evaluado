import store from './store.js';

// export async function search (text) {
//     const url = text;
//     fetch(url)
//         .then(res => res.json())
//         .then(res => {
//             let items = [...store.getState().items];
//             let newPlanet = items.concat({
//                 name : res.pl_name,
//                 dens : res.pl_dens
             
//             });
//             store.setState({
//                 items : newPlanet
//             });
//         })
// }

// export async function planets () {
//     const url = "data/earth-like-results.json";
//     fetch(url)
//         .then(res => res.json())
//         .then(res => {
//              res.results.map(planet => {
//              return (search(planet));
//                 })
//             })
// }

// const res = await fetch(url);
// store.setState({items:res.data});

async function actions1(x) {
    return fetch(x)
    .then(res => res.json())
    .then (res => {
        return {
            name : res.pl_name,
            dens : res.pl_dens,
     };
    })
}

export async function search() {
    const res = await fetch("data/earth-like-results.json").then(result => result.json());
    const list = await planets(res.results);
    store.setState({
        items : list
    })
}

function planets(list) {
  return Promise.all(list.map(planet => actions1(planet)))
}
