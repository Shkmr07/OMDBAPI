const getElement = (data)=> {

    const movie = document.getElementById('getMovie')

    movie.innerHTML = `

        <h2>${data.Title} (${data.Year})</h2>
        <img src="${data.Poster}" alt="${data.Title} poster">
        <p><strong>Plot:</strong> ${data.Plot}</p>
        <p><strong>Director:</strong> ${data.Director}</p>
        <p><strong>Actors:</strong> ${data.Actors}</p>
        <p><strong>Genre:</strong> ${data.Genre}</p>
        <p><strong>Runtime:</strong> ${data.Runtime}</p>
        <p><strong>Language:</strong> ${data.Language}</p>
        <p><strong>Country:</strong> ${data.Country}</p>
        <p><strong>Awards:</strong> ${data.Awards}</p>
        <p><strong>BoxOffice:</strong> ${data.BoxOffice}</p
    
    `
}


document.getElementById('Search').addEventListener('click',async () => {

    const detail = document.getElementById('movielist').value.trim()

    try{

        const res = await fetch(`http://www.omdbapi.com/?t=${encodeURIComponent(detail)}&apikey=c85b7f8a`)
        const data = await res.json()
        if (data.Response === "True") getElement(data)
        else alert('No Details Found')
    }
    catch (error) {
        console.error('Something Went Wrong',error)
    }
})




