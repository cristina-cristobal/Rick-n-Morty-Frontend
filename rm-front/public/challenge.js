// load pre-existing elements
var like = 0
document.addEventListener('DOMContentLoaded', (event) => {
  console.log("DOM IS LOADED");

  setInterval(incrementCounter, 1000)

  // plusButton
  // minus
  // like
  // pause
  // counter
  // comment
})

// load click events
document.getElementById('+').addEventListener('click', incrementCounter)
document.getElementById('-').addEventListener('click', decrementCounter)
document.getElementById('<3').addEventListener('click', heart)


 function incrementCounter(){
 like = 0
 let findCounter = document.getElementById('counter')
 findCounter.innerText++
}


// 2. As a user, i can manually increment and decrement the counter as i like
// find the plus button element
// add 1 to the counter when plus is clicked
// listen for click, then execute function to increment

function decrementCounter(){
  like = 0
  let findCounter = document.getElementById('counter')
  findCounter.innerText--

}

// 3. As a user, i can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number
function heart(){
  // element.dataset.id = ?
  // element.dataset.id
  let findCounter = document.getElementById('counter').innerText
  let ul = document.getElementsByClassName('likes')[0]
  let li = document.createElement('li')

  // trevor said to use this instead of doing .dataset, would need to make a currentTime variable first
  document.querySelector(`#${currentTime}`)

  li.innerText = `The number ${findCounter} has ${like} likes.`

  ul.appendChild(li)




}


// 4. As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'



// 5. As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"
