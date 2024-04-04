

function UserList(props) {

    let userBuyList = props.userList;
    let categoryList = props.category;

    let listItem = userBuyList.map(item => <li key={item.id}>{item.name}: {item.price}$</li>)

    return <div><h3>{categoryList}</h3>{listItem}</div>
}

export default UserList;