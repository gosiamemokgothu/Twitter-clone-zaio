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
