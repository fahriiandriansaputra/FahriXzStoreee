export async function askAI(prompt) {

try{

const res = await fetch(
"https://api.openai.com/v1/chat/completions",
{

method: "POST",

headers: {

"Content-Type": "application/json",

"Authorization":
"Bearer YOUR_API_KEY"

},

body: JSON.stringify({

model: "gpt-4o-mini",

messages: [

{
role: "user",
content: prompt
}

]

})

}

);

if(!res.ok){

throw new Error(
"Gagal request AI"
);

}

const data =
await res.json();

return data;

}
catch(error){

console.error(error);

return {

error: true,

message:
error.message

};

}

}