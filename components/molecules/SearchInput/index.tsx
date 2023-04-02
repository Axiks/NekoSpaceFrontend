import { ChangeEvent, FC, useState } from 'react';
import { Input } from 'baseui/input'; 
import { Button, SHAPE } from 'baseui/button';
import { SearchIcon, AddImageIcon } from '@atoms';
import { SearchInputContainer } from './styles';

export interface ISearchInputProps {}

const SearchInput: FC<ISearchInputProps> = () => {
  const [value, setValue] = useState('');

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <SearchInputContainer>
      <Input
        startEnhancer={<SearchIcon />}
        endEnhancer={<AddImageIcon />}
        value={value}
        onChange={handleValueChange}
        placeholder="Введіть назву аніме"

      />
      <Button shape={SHAPE.pill}>Знайти</Button>
    </SearchInputContainer>
  )
};

export default SearchInput;