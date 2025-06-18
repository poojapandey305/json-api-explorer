// so much empty
document.addEventListener("",() => {
    const postForm = document.getElementById("postForm");
})
fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(response)
{
    return Response.json()
}).then(function())*/
const postList = document.getElementById("postList"); // Corrected ID name and spacing
document.addEventListener("click", function (event) {
    if (event.target.id === "fetchButton") {
        fetch("https://jsonplaceholder.typicode.com/posts/1") // Added /1 to get a specific post
            .then(function (response) {
                return response.json(); // Parse JSON
            })
            .then(function (json) {
                console.log(json);
                postList.innerHTML = `
                    <ul>
                        <li><strong>Title:</strong> ${json.title}</li>
                        <li><strong>Body:</strong> ${json.body}</li>
                    </ul>
                `;
            })
            .catch(function (error) {
                console.error("Error fetching the data:", error);
            });
    }
});