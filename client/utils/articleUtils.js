import fetch from 'isomorphic-fetch';

export default {
  getArticles () {
    return new Promise((resolve, reject) => fetch('/api/kb')
      .then(response => response.json()
      .then(json => resolve(json)))
      .catch(err => reject(err)));
  },
  getArticlesByIds (idArray) {
    return fetch(`/api/kb/${
      idArray.reduce((list, entry, i) =>
        i > 0 ?
          `${list},${entry}`
          : `${entry}`, ''
      )}`, {
        method: 'GET',
        headers: {'Content-Type':'application/json'}
      })
      .then(response => response.json())
      .catch(err => console.log(err));
  },
  getArticle (id) {
    return new Promise((resolve, reject) => fetch(`/api/kb/${id}`)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(err => reject(err)));
  },
  postArticle (article) {
    return new Promise((resolve, reject) => fetch('/api/kb', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(article)
      })
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(err => reject(err)));
  },
  editArticle (article) {
    return new Promise((resolve, reject) => fetch(`/api/kb/${article.id}`, {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(article)
      })
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(err => reject(err)));
  },
  deleteArticle (id) {
    return new Promise((resolve, reject) => fetch(`/api/kb/${id}`, {method: 'DELETE'})
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(err => reject(err)));
  }
};
