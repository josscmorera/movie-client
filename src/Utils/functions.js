export const getHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json', 
    'Authorization': `Bearer ${token}`
  }
}

export const formatDate = (date) => {
  const newDate = new Date(date)
  return newDate.toLocaleDateString()
}

export const minutesToHours = (totalMinutes)  => {
  var hours = Math.floor(totalMinutes / 60)
  var minutes = totalMinutes % 60

  if (minutes == 0) {
    return `${hours}h`
  } else if (hours > 0 && minutes > 0) {
    return `${hours}h ${minutes}min`
  } else {
    return `${minutes}min`
  }
}