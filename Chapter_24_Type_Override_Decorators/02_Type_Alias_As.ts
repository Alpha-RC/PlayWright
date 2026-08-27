let rawResponsee: unknown = {
    sts: 200,
    body: {user:"Admin", role:"tester"}
}

interface userResponse {
    
    sts: number;
    body: {
        user: string;
        role: string;
    }
}


let response = rawResponsee as userResponse;

console.log("Status: ", response.sts);
console.log("User: ", response.body.user);
console.log("Role: ", response.body.role);