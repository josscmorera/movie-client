export const getHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json', 
    'Authorization': `Bearer ${token}`
  }
}

export const formatDate = (date, type) => {
  if (!date) return ''
  const newDate = new Date(date)

  if (type === 'input') {
    return `${newDate.getFullYear()}-${((newDate.getMonth() + 1) < 10 ? '0' : '') +( newDate.getMonth() + 1)  }-${(newDate.getDate() < 10 ? '0' : '') + newDate.getDate()}`
  }

  return newDate.toLocaleDateString()
}

export const minutesToHours = (totalMinutes)  => {
  var hours = Math.floor(totalMinutes / 60)
  var minutes = totalMinutes % 60

  if (minutes === 0) {
    return `${hours}h`
  } else if (hours > 0 && minutes > 0) {
    return `${hours}h ${minutes}min`
  } else {
    return `${minutes}min`
  }
}