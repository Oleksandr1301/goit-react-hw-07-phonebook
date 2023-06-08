import { useDispatch } from 'react-redux';
import { FilterBox, FilterInput } from './contactFilter.styled';
import { setFilter } from '../../redux/actions';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <FilterBox>
      <label>Find contacts by name or phone number</label>
      <FilterInput type="text" name="filter" onChange={onChange} />
    </FilterBox>
  );
};

export default Filter;
