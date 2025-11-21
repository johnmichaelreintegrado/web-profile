fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const profile = data.profile;

    document.querySelector('.profile .name').textContent = profile.name;
    document.querySelector('.profile .description').textContent = profile.bio;
    const githubLink = document.querySelector('.profile .github-link');
    githubLink.href = profile.github;
    githubLink.textContent = "GitHub";

    document.querySelector('.profile .image img').src = profile.image;
    document.querySelector('.profile .image img').alt = profile.name;
  })
  .catch(error => console.error('Error loading profile:', error));

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const activitiesList = document.querySelector('.activities ul');

    data.activities.forEach(activity => {
      const li = document.createElement('li');
      li.textContent = activity.category;
      activitiesList.appendChild(li);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('cardsContainer');

    data.activities.forEach(activity => {
      const card = document.createElement('div');
      card.classList.add('card');

      const title = document.createElement('h3');
      title.textContent = activity.category;
      card.appendChild(title);

      const list = document.createElement('ul');
      activity.tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        list.appendChild(li);
      });

      card.appendChild(list);
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));
