export const getHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json', 
    'Authorization': `Bearer ${token}`
  }
}