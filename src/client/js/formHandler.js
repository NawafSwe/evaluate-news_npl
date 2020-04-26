function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let word = document.getElementById('name').value


    //https://api.aylien.com/api/v1/sentiment

    console.log("::: Form Submitted :::")
    fetch(`http://localhost:8081/test/${word}`)
        .then(res => res.json())
        .then(function (res) {
            document.getElementById('results').innerHTML = `
            <div>
            <p>polarity : ${res.polarity}</p>
             <p>subjectivity : ${res.subjectivity}</p>
             <p>polarity confidence : ${res.polarity_confidence}</p>
             <p>subjectivity confidence : ${res.subjectivity_confidence}</p>
             <p>Text : ${res.text}</p>
             </div>`
        })
}

export {handleSubmit}

/*curl https://api.aylien.com/api/v1/sentiment \
   -H "X-AYLIEN-TextAPI-Application-Key: YOUR_APP_KEY" \
   -H "X-AYLIEN-TextAPI-Application-ID: YOUR_APP_ID" \
   -d mode="tweet" \
   -d text="John+is+a+very+good+football+player"*/
/* @simple response of Sentiment Analysis
{
  "polarity":"positive",
  "subjectivity":"subjective",
  "text":"John is a very good football player",
  "polarity_confidence":0.9999936601153382,
  "subjectivity_confidence":0.9963778207617525
}*/


