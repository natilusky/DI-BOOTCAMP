const sendData = () => {
    const user = document.getElementById('user').value;
    // let data = {
    //   u:user,
    // }
    fetch('http://localhost:5000/addUser',{
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({user})
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => {
          console.log(err);
      })
}

const showData = () => {

    fetch('http://localhost:5000/showUser')
    .then(res => res.json())
    .then(data => {
        createData(data);
    })
}

const createData = (arr) => {
    let root = document.getElementById('root');
    arr.forEach(item => {
      let div = document.createElement('div');
      div.innerText = item.user;
      root.appendChild(div)
    })
  }


