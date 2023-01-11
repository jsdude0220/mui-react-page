export const Tag = ({
  item,
  selectedIndex = 0,
  onChange = () => true,
}) => {
  return (
    <div
      className='tag-element'
      style={{
        color: selectedIndex === item.id ? '#00C389' : 'rgba(27,34,52,0.87)',
        background: selectedIndex === item.id ? '#00C38920' : '#00000010',
      }}
      onClick={() => onChange(item.id)}
    >
      {item.title} &#40;{item.val}&#41;
    </div>
  )
}