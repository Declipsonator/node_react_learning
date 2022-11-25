import React, {useEffect, useState} from 'react';


function Tweet() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/tweets');
        const items = await data.json();
        setItems(items);
    };

    return(
        <div>
            <input id='name-input' placeholder='name' type="text"/>
            <input id='message-input' placeholder='message' type="text"/>
            <input id='username-input' placeholder='username' type="text"/>
            <button value=" Submit "  onClick={
                function submitData() {
                    let json = {"name": document.getElementById("name-input").value, "msg": document.getElementById("message-input").value, "username": document.getElementById("username-input").value};
                    console.log(JSON.stringify(json));
                    fetch('/addtweet', {  // Enter your IP address here
                    method: 'POST', 
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(json) // body data type must match "Content-Type" header
                  })
                }
            }> Submit </button>
            <section>
                {
                items.map(item => {
                    return (
                    <div class="container-fluid p-3 w-50">
                        <div class="card-deck">
                            <div class="card">
                                <div class="card-body p-1">
                                    <h6 class="card-title">{item.name}</h6>
                                    <p class="card-text">{item.msg}</p>
                                    <p class="card-text"><i>by {item.username}</i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                    })
                }
            </section>
        </div>
    );
}



export default Tweet;