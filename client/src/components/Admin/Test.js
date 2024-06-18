import React from 'react';
const Test = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.target);

        fetch('http://localhost:3030/books/', {
            method: 'POST',
            body: data,
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <form onSubmit={handleSubmit} method="POST" enctype="multipart/form-data">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" />
            <br />
            <label for="description">Description:</label>
            <input type="text" id="description" name="description" />
            <br />
            <label for="price">Price:</label>
            <input type="number" id="price" name="price" />
            <br />
            <label for="author">Author:</label>
            <input type="text" id="author" name="author" />
            <br />
            <label for="stock">Stock:</label>
            <input type="number" id="stock" name="stock" />
            <br />
            <label for="primaryImage">Primary Image:</label>
            <input type="file" id="primaryImage" name="primaryImage" />
            <br />
            <label for="otherImages">Other Images:</label>
            <input type="file" id="otherImages" name="otherImages" multiple />
            <br />
            <button type="submit">Create Book</button>
        </form>
    )
}
export default Test;