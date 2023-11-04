import { useDispatch } from 'react-redux';
import { findName } from 'redux/filterSlise';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChange = evt => {
    const filterName = evt.currentTarget.value;
    dispatch(findName(filterName));
  };

  return (
    <div>
      <input type="text" name="filter" onChange={onChange} />
    </div>
  );
};
