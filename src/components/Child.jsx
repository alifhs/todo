import React from 'react';

// const Output = () => {

//     return (
//         <div>
//             <h1>Child Component</h1>
//         </div>
//     )
// };

const Output = ({allLists, updateList, name, email}) => {

    const handleUpdate = () => {
        // console.log("hello");
        // console.log(allLists);
        const filterList = allLists.filter((list) => list.name !== name);
        console.log(filterList);
        updateList(filterList);
    };

    return (
        <span onClick={handleUpdate}>
            {name} {email}
        </span>
    );

}

export default Output;