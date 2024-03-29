// route to get logged in user's info (needs the token)
export const getMe = (token) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to retrieve user information: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  });
};

export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to create user: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  });
};

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to log in: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  });
};

// save book data for a logged-in user
export const saveBook = (bookData, token) => {
  return fetch('/api/users/books', {  // Modified endpoint for saving books
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookData),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to save book: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  });
};

// remove saved book data for a logged-in user
export const deleteBook = (bookId, token) => {
  return fetch(`/api/users/books/${bookId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to delete book: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  });
};

// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch Google Books: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  });
};