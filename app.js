let span1 = document.querySelector('span')

let span2 = document.querySelectorAll('span')[1]

let span3 = document.querySelectorAll('span')[2]

let span4 = document.querySelectorAll('span')[3]

let span5 = document.querySelectorAll('span')[4]

let select = document.getElementById('select')

// Make a GET request using the fetch API
num = 0
let audio = []
fetch('https://api.quran.com/api/v4/chapter_recitations/1?language=en')
.then(function(response) {
    // Check if the response status is OK (200)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    // Parse the response as JSON
    return response.json();
})
.then(function(data) {
    // Handle the JSON data here
    // console.log(audio);
    audio = data.audio_files
    
})
.catch(function(error) {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
    location.reload();
    alert('Refresh the web page please !')
});



fetch('https://api.quran.com/api/v4/chapters?language=en')
    .then(function(response) {
        // Check if the response status is OK (200)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse the response as JSON
        return response.json();
    })
    .then(function(data) {
        // Handle the JSON data here
        // console.log(data);
    data.chapters.forEach((surat,index)=>{
        let opt = document.createElement('option')
        // let a = document.createElement('a')
        opt.innerHTML = `${surat.name_arabic}`
        opt.setAttribute('value',index)
        // a.appendChild(opt)
        // console.log(1)
        select.appendChild(opt)
    })
        let source = document.createElement('source')

        source.src = audio[0].audio_url
        source.type = "audio/mpeg"
        document.getElementById('aud').appendChild(source) 
        document.getElementById('aud').load()
        span1.textContent = data.chapters[0].name_arabic
        span2.textContent = data.chapters[0].name_complex
        span3.textContent = "Revelation place : "+data.chapters[0].revelation_place
        span4.textContent = "Revelation order : "+data.chapters[0].revelation_order
        span5.textContent = "Verses count: "+data.chapters[0].verses_count
    })
    .catch(function(error) {
        // Handle any errors that occurred during the fetch
        location.reload();
        console.error('Fetch error:', error);
    });
  

select.addEventListener('change',function(e){
    
    let n = e.target.options[e.target.selectedIndex].value
    let source = document.createElement('source')

        source.src = audio[n].audio_url
        source.type = "audio/mpeg"
        document.getElementById('aud').innerHTML = ""

        document.getElementById('aud').appendChild(source) 
        document.getElementById('aud').load()

        fetch('https://api.quran.com/api/v4/chapters?language=en')
        .then(function(response) {
            // Check if the response status is OK (200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the response as JSON
            return response.json();
        })
        .then(function(data) {
            // Handle the JSON data here
            // console.log(data);
             
            span1.textContent = data.chapters[n].name_arabic
            span2.textContent = data.chapters[n].name_complex
            span3.textContent = "Revelation place : "+data.chapters[n].revelation_place
            span4.textContent = "Revelation order : "+data.chapters[n].revelation_order
            span5.textContent = "Verses count: "+data.chapters[n].verses_count
        })
        .catch(function(error) {
            // Handle any errors that occurred during the fetch
            location.reload();
            console.error('Fetch error:', error);
        });
})