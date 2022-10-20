import React, { useState } from "react";
function Profile() {
    const [loggedIn, setLoggedIn] = useState(3)
    return (
        <div>

            {loggedIn == 1 ?
                <h1>Profile </h1>
                : loggedIn == 2 ? <h1>Default </h1>
                    : <h1>Name </h1>}

        </div>
    )
}
export default Profile;