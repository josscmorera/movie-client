import { getHeaders } from "../Utils/functions";

const url = process.env.REACT_APP_URL_ENDPOINT;

export const getMovies = async () => {
    const  response = await fetch(`${url}/movies`, {
        method: 'GET',
        headers: getHeaders()
    })
    const data = await response.json();
    if (data.success) {
      return data.data;
    } else {
      return [];
    }
}

export const getMovie = async (id) => {
    const  response = await fetch(`${url}/movies/${id}`, {
        method: 'GET',
        headers: getHeaders()
    })
    const data = await response.json();
    if (data.success) {
      return data.data;
    } else {
      return null;
    }
}

export const updateLastMovies = async () => {
    const  response = await fetch(`${url}/movies`, {
        method: 'POST',
        headers: getHeaders()
    })
    const data = await response.json();
    if (data.success) {
      return data.data;
    } else {
      return [];
    }
}

export const createMovie = async (movie) => {
    const  response = await fetch(`${url}/movies`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(movie)
    })
    const data = await response.json();
    if (data.success) {
      return data.data;
    } else {
      return null;
    }
}

export const updateMovie = async (id,movie) => {
    const  response = await fetch(`${url}/movies/${id}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(movie)
    })
    const data = await response.json();
    if (data.success) {
      return data.data;
    } else {
      return null;
    }
}

export const deleteMovie = async (id) => {
    const  response = await fetch(`${url}/movies/${id}`, {
        method: 'DELETE',
        headers: getHeaders()
    })
    const data = await response.json();
    if (data.success) {
      return data.data;
    } else {
      return null;
    }
}

export const addRating = async (id, rating) => {
    const  response = await fetch(`${url}/movies/${id}/rating/add`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify({ rating })
    })
    const data = await response.json();
    if (data.success) {
      return data.data;
    } else {
      return null;
    }
}

export const updateRating = async (id, rating) => {
  const  response = await fetch(`${url}/movies/${id}/rating/update`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify({ rating })
  })
  const data = await response.json();
  if (data.success) {
    return data.data;
  } else {
    return null;
  }
}


export const removeRating = async (id) => {
    const  response = await fetch(`${url}/movies/${id}/rating/remove`, {
        method: 'PUT',
        headers: getHeaders()
    })
    const data = await response.json();
    if (data.success) {
      return data.data;
    } else {
      return null;
    }
}

export const addComment = async (id, comment) => {
    const  response = await fetch(`${url}/movies/${id}/comment/add`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify({ comment })
    })
    const data = await response.json();
    if (data.success) {
      return data.data;
    } else {
      return null;
    }
}

export const updateComment = async (id, commentId, comment) => {
  const  response = await fetch(`${url}/movies/${id}/comment/${commentId}/update`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify({ comment })
  })
  const data = await response.json();
  if (data.success) {
    return data.data;
  } else {
    return null;
  }
}

export const removeComment = async (id, commentId) => {
    const  response = await fetch(`${url}/movies/${id}/comment/${commentId}/remove`, {
        method: 'PUT',
        headers: getHeaders()
    })
    const data = await response.json();
    if (data.success) {
      return data.data;
    } else {
      return null;
    }
}





