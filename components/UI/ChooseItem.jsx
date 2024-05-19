import { useEffect } from 'react'

const ChooseItem = ({ label, setState, value, items, radio = true }) => {
  const handleChange = e => {
    setState(prev => {
      if (radio && e.target.checked) {
        return e.target.value
      } else if (radio && !e.target.checked) {
        return ''
      }

      if (e.target.checked) {
        return [...prev, e.target.value]
      } else {
        return prev.filter(el => el !== e.target.value)
      }
    })
  }

  useEffect(() => {
    if (items.length)
      items.forEach(item => {
        if (item.defaultChecked && !value?.length) {
          setState(prev => {
            return [...prev, item.value]
          })
        }
      })
  }, [items])

  const randomId = Math.random()

  return (
    <div className="flex flex-wrap gap-2 choose-item">
      <h2 className="dark:text-dark">{label}</h2>
      {items.map(item => (
        <div className="relative" key={item.value}>
          <input
            onChange={e => handleChange(e)}
            name={label}
            id={item.value + randomId}
            type="checkbox"
            value={item.value}
            checked={radio ? value === item.value : undefined}
            defaultChecked={item.defaultChecked}
          />
          <label htmlFor={item.value + randomId} className="select-none text-black">
            {item.label}
          </label>
        </div>
      ))}
    </div>
  )
}

export default ChooseItem
