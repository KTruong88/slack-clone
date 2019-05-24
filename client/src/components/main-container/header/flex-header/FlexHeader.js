import React from 'react';

import FlexHeaderActions from './FlexHeaderActions/FlexHeaderActions';

import '../../../../styles/FlexHeader.scss';
import Search from '@carbon/icons-react/es/search/20';

const FlexHeader = () => {
  return (
    <div className="flex_header">
      <div className="search_container">
        <form className="search_form">
          <Search className="icon_search"></Search>
          <div className="search_form_text">Search</div>
        </form>
      </div>
      <FlexHeaderActions></FlexHeaderActions>
    </div>
  );
}

export default FlexHeader;