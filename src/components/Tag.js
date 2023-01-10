export const Tag = ({
  item,
  selectedIndex = 0,
  onChange = () => true,
}) => {
  return (
    <div
      className='tag-element'
      style={{
        color: selectedIndex === item.id ? 'white' : '#6b7280',
        background: selectedIndex === item.id ? '#00C389' : '#f3f4f6',
      }}
      onClick={() => onChange(item.id)}
    >
      {item.title} &#40;{item.val}&#41;
    </div>
  )
}