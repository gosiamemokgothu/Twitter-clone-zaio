const tweetInput = document.getElementById('tweet-input');
const postButton = document.querySelector('.post-button');
const postTweetSection = document.querySelector('.post-tweet');

function createTweet(text) {
  const article = document.createElement('article');
  article.className = 'tweet';

  article.innerHTML = `
  <i class="bi bi-person-circle tweet-avatar"></i>

  <div class="tweet-content">

    <div class="tweet-heading">
      <strong>Gosiame Mokgothu</strong>
      <span>@gosiame · now</span>
      <i class="bi bi-three-dots tweet-menu"></i>
    </div>

    <p class="tweet-text"></p>

    <div class="tweet-actions">
      <button type="button" aria-label="Comment">
        <i class="bi bi-chat"></i>
        <span>0</span>
      </button>

      <button type="button" aria-label="Retweet">
        <i class="bi bi-arrow-repeat"></i>
        <span>0</span>
      </button>

      <button type="button" aria-label="Like">
        <i class="bi bi-heart"></i>
        <span>0</span>
      </button>

      <button type="button" aria-label="Share">
        <i class="bi bi-upload"></i>
      </button>
    </div>

  </div>
`;

  article.querySelector('.tweet-text').textContent = text;
  return article;
}

postButton.addEventListener('click', function () {
  const text = tweetInput.value.trim();

  if (!text) {
    return;
  }

  const newTweet = createTweet(text);
  postTweetSection.insertAdjacentElement('afterend', newTweet);
  tweetInput.value = '';
});

document.addEventListener('click', function (event) {
  const likeButton = event.target.closest('button[aria-label="Like"]');
  if (!likeButton) {
    return;
  }

  const icon = likeButton.querySelector('i');
  const countSpan = likeButton.querySelector('span');
  if (!icon || !countSpan) {
    return;
  }

  const isLiked = icon.classList.contains('bi-heart-fill');

  if (isLiked) {
    icon.classList.remove('bi-heart-fill');
    icon.classList.add('bi-heart');
    likeButton.classList.remove('liked');

    const count = parseInt(countSpan.textContent, 10) || 0;
    countSpan.textContent = Math.max(0, count - 1);
  } else {
    icon.classList.remove('bi-heart');
    icon.classList.add('bi-heart-fill');
    likeButton.classList.add('liked');

    const count = parseInt(countSpan.textContent, 10) || 0;
    countSpan.textContent = count + 1;
  }
});

document.addEventListener('click', function (event) {
  const followButton = event.target.closest('.follow-button');
  if (!followButton) {
    return;
  }

  const isFollowing = followButton.classList.contains('following');

  if (isFollowing) {
    followButton.classList.remove('following');
    followButton.textContent = 'Follow';
  } else {
    followButton.classList.add('following');
    followButton.textContent = 'Following';
  }
});

{
  const characterInput = document.getElementById("tweet-input");
  const characterCount = document.getElementById("character-count");
  const postTweetButton = document.querySelector(".post-button");

  function updateCharacterCount() {
    const totalCharacters = characterInput.value.length;
    characterCount.textContent = `${totalCharacters} / 280`;

    if (totalCharacters >= 260) {
      characterCount.style.color = "#f4212e";
    } else {
      characterCount.style.color = "#536471";
    }
  }

  characterInput.addEventListener("input", updateCharacterCount);
  postTweetButton.addEventListener("click", updateCharacterCount);
}
