const getResponse = async (question:string) => {
    return await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: question }),
      })
}

const signUp = async (data:any) => {
    return await fetch("/api/authentication/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
}
const addChildren = async (data: any) => {
  return await fetch("/api/authentication/addchild", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
const storeConversation = async (data: any) => {
  return await fetch("/api/storeChat/conversation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};


export { getResponse, signUp, addChildren, storeConversation };