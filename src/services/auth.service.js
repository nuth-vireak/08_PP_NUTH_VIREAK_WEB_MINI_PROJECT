export const loginService = async (userInfo) => {
    const res = await fetch('http://110.74.194.123:8989/api/todo/v1/auth/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo)
    });
    const data = await res.json();

    if (data.token) {
        return data
    } else {
        return null
    }
}

export const registerService = async (userInfo) => {
    const res = await fetch('http://110.74.194.123:8989/api/todo/v1/auth/sign-up', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo)
    });
    const data = await res.json();
    console.log(data)
    return data;
}