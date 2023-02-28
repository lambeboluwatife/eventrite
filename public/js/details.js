const url = encodeURI(window.location.href)
const msg = encodeURIComponent(document.querySelector('.display-1').textContent)
const title = encodeURIComponent(document.querySelector('title').textContent)

const twitter = document.querySelector('.twitter')
twitter.href = `http://twitter.com/share?&url=${url}&text=${msg}&hashtags=events,eventrite`

const fb = document.querySelector('.facebook')
fb.href = `https://www.facebook.com/share.php?u=${url}`


const linkedIn = document.querySelector('.linkedin')
linkedIn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`

const whatsApp = document.querySelector('.whatsapp')
whatsApp.href = `whatsapp://send?text=${url}`

  // Get the text field
  const copyText = document.getElementById("myInput");
  copyText.value = url

  const copied = document.querySelector('.copied')
  copied.style.display = 'none'

function copyLink() {
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    copied.style.display = 'block'

    setTimeout(removeCopied, 2000)
}

function removeCopied() {
    copied.style.display = 'none'
}
