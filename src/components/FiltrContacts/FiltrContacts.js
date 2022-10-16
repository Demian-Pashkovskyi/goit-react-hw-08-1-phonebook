import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { addFilter, selectContactsFilter } from 'redux/AppSlice';
import { LabelForm, FilterInput, FilterWrapper } from './FiltrContactsStyled';

export const Filter = () => {
  const { control } = useForm();
  const filter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();
  const onInputChange = evt => {
    dispatch(addFilter(evt.target.value));
  };

  return (
		<FilterWrapper>
				<LabelForm>
					<span>Find contacts by name</span>
					<Controller
						render={({ field }) => (
							<FilterInput {...field} onChange={onInputChange} 
							value={filter} />
						)}
						name="filter"
						control={control}
						defaultValue=""
					/>
				</LabelForm>
			</FilterWrapper>
		);
	};