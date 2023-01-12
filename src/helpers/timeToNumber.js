const timeToNumber = (time) => {
  const num = +(time.slice(0,2)+time.slice(3,5)+time.slice(6,8))
  return num
}

export default timeToNumber