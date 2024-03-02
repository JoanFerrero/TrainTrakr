const OptionTrain = ({train}) => {
  return (
    <>
      {train.status === 'activo' ? (
        <option value={train.slug}>{train.name}</option>
      ) : null}
    </>
  )
}

export default OptionTrain;