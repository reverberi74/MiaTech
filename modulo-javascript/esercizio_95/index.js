// Comprendere un errore CORS
async function testCORS() {
    try {
        const response = await fetch("https://www.google.com", { method: "GET" });
        const data = await response.text();
        console.log("Dati ricevuti:", data);
    } catch (error) {
        console.error("Errore CORS:", error);
    }
}

testCORS();
/*
output:
Access to fetch at 'https://www.google.com/' has been blocked
by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. 
If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with 
CORS disabled.
*/ 