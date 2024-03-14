import { ButtonGroup } from '@mui/material';

import { Container, StyledButton } from './CategoryButtonGroup.styles';

const categoryOptions = [
  {
    key: 'all',
    name: 'All'
  },
  {
    key: 'healt',
    name: 'Health'
  },
  {
    key: 'travel',
    name: 'Travel'
  },
  {
    key: 'sports',
    name: 'Sports'
  }
];

// const categorySelected = 'All';

interface CategoryButtonGroupProps {
  categorySelected: string;
  handleSelectCategory: (category: string) => void;
}

function CategoryButtonGroup({ categorySelected, handleSelectCategory }: CategoryButtonGroupProps) {
  return (
    <Container item>
      <ButtonGroup aria-label="category button group" color="inherit">
        {/* Activity 5 - Iterate categoryOptions */}
        {categoryOptions.map((option) => (
          <StyledButton
            key={option.key}
            type="button"
            // Activity 5 - Replaces the hardcoded value "categoryOptions[0].name" with the variable obtained from the iteration and uses the variable "categorySelected" obtained from the props
            selected={option.name === categorySelected}
            onClick={() => {
              //  Activity 5 - After you have iterated the "categoryOptions" array, send the "name" property as a parameter to the "handleSelectCategory" function
            }}
          >
            {/* Activity 5 - Render category name */}
            {option.name}
          </StyledButton>
        ))}
      </ButtonGroup>
    </Container>
  );
}

export default CategoryButtonGroup;
