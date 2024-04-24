import {headerToken} from "@/app/(auth)/api/headerToken";

export const getAllWorkspaces = async () => {
    const header = await headerToken();
    const res = await fetch("http://110.74.194.123:8989/api/todo/v1/workspaces", {
        headers: header
    });

    if (!res.ok) {
        console.error(`HTTP error! status: ${res.status}`);
        return;
    }

    try {
        const data = await res.json();
        console.log("data in service : ", data);
        return data;
    } catch (error) {
        console.error('Failed to parse JSON:', error);
    }
}